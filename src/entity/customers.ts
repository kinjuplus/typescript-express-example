import {Entity, Column, PrimaryGeneratedColumn, Unique} from "typeorm";

@Entity({name: "customers"})
@Unique(["email"])
export class Customers {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({name:"first_name",type:"character varying",length:255})
    firstName: string;
    @Column({name:"last_name",type:"character varying",length:255})
    lastName: string;
    @Column({name:"email",type:"character varying",length:255})
    email: string;
    @Column({name:"account_password",type:"character varying",length:255})
    accountPassword: string;
    @Column({name:"birth_date",type:"date"})
    birthDate: Date;
    @Column({name:"policy_code",type:"character varying",length:8})
    policyCode: string;
    @Column({name:"gene",type:"json"})
    gene: string;
}