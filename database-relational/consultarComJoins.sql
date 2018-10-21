select * from prefeitos;
select * from cidades;

select * from cidades c inner join prefeitos p on c.id = p.cidade_id;
select * from cidades c left outer join prefeitos p on c.id = p.cidade_id;
select * from cidades c right join prefeitos p on c.id = p.cidade_id;
-- select * from cidades c full join prefeitos p on c.id = p.cidade_id;

select * from cidades c left outer join prefeitos p on c.id = p.cidade_id
union
select * from cidades c right join prefeitos p on c.id = p.cidade_id;



-- diferentes tipos de join 
-- Ctrl + enter para executar o sql da linha local
select * from prefeitos; 

select * from cidades c 
inner join prefeitos p on c.id = p.cidade_id;

select * from cidades;


select * from cidades c inner join prefeitos p on c.id = p.cidade_id;

-- vai trazer todos as cidades que nao tem prefeito encontrado na tabela prefeitos
-- mesmo as cidades que nao tem prefeito associado, ele vai trazer
select * from cidades c left join prefeitos p on c.id = p.cidade_id; 

-- vai vir os dois campos q tem relação (inner) e todos os prefeitos q nao tem nenhuma cidade
select * from cidades c right join prefeitos p on c.id = p.cidade_id;

-- select * from cidades c full join prefeitos p on c.id = p.cidade_id;

-- full join:  obs: union all traz as duplicações
select * from cidades c left join prefeitos p on c.id = p.cidade_id
union 
select * from cidades c right join prefeitos p on c.id = p.cidade_id;
