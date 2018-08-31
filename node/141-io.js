// to run: 
// node 141-io.js -a 
// or 
// node 141-io.js 
const anon = process.argv.indexOf('-a' ) !== -1
console.log(anon)

if (anon) {
    process.stdout.write('Hey anonymous!\n')
    process.exit()
} else {
    process.stdout.write('Enter your name: ')
    process.stdin.on('data', data => {
        const name = data.toString().replace('\n', '')

        process.stdout.write(`Hey ${name}!\n`)
        process.exit()
    })
}