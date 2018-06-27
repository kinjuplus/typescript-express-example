import {Request, Response} from "express";
import {getManager} from "typeorm";
import {Customers} from "../entity/customers";
import {Md5} from "ts-md5/dist/md5";

export async function postLoginAction(request: Request, response: Response) {
    try
    {
       let inputEmail = request.body.email;
       let password = Md5.hashStr(request.body.password).toString().toUpperCase();     
       let customerRepository = getManager().getRepository(Customers);
       let loginCustomer = await customerRepository.find({email:inputEmail,accountPassword:password}); 
       
       request.session['customer']=loginCustomer;       
       response.json({ 'success': true, 'data': loginCustomer });
    }catch(e){
        console.log(e);
        response.json({ 'error': true, 'message': 'Error logged in' });
    }
    
}