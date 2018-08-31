-- create the table: state
drop table states;
create table states (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL,
    initials VARCHAR(2) NOT NULL,
    --region ENUM('North', 'Mortheast', 'Center West', 'Southeast', 'South') NOT NULL,
    region ENUM('Norte', 'Nordeste', 'Sul', 'Sudeste', 'Centro-Oeste') NOT NULL,
    population DECIMAL(5,2) NOT NULL,
    PRIMARY KEY (id), 
    UNIQUE KEY (name),
    UNIQUE KEY (initials)
);