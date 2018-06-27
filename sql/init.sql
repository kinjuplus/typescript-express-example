insert into customers(first_name, last_name, email, account_password, birth_date,policy_code, gene)
values('Baron','Su','test@test.com','827CCB0EEA8A706C4C34A16891F84E7B','1970-01-01','abcd1234','{"x":"ACTG"}');

insert into customers(first_name, last_name, email, account_password, birth_date,policy_code, gene)
values('Louis','Wang','abc@test.com','827CCB0EEA8A706C4C34A16891F84E7B','1970-01-01','abcd1234','{"x":"ACTG"}');


CREATE TABLE customers
(
    id bigserial,
    first_name character varying(255)  NOT NULL,
    last_name character varying(255)  NOT NULL,
    email character varying(255)  NOT NULL,
    account_password character varying(255) NOT NULL,
    birth_date date NOT NULL,
    policy_code character varying(8) NOT NULL,
    gene json NOT NULL
);