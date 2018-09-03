import $ from 'jquery' //importa module (sistema de modulos ES15)

const loadHtmlSuccessCallbacks = []

export function onLoadHtmlSuccess(callback) {
    if(!loadHtmlSuccessCallbacks.includes(callback)) {
        loadHtmlSuccessCallbacks.push(callback)
    }
}

function loadIncludes(parent) {
    if(!parent) parent = 'body'
    $(parent).find('[wm-include]').each(function(i, e) {
        const url = $(e).attr('wm-include')
        $.ajax({
            url,
            success(data) {
                $(e).html(data)
                $(e).removeAttr('wm-include') // evita que seja executada mais de uma vez

                loadHtmlSuccessCallbacks.forEach(
                    callback => callback(data))
                loadIncludes(e)
            }
        })
    })
}

loadIncludes()