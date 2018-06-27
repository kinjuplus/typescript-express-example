import {Request, Response} from "express";
import {getManager} from "typeorm";
import {Customers} from "../entity/customers";

export async function getCustomerAction(request: Request, response: Response) {
    try
    {     
       let customerId = request.params.customerId;
       let customerRepository = getManager().getRepository(Customers);
       let customer = await customerRepository.find({id:customerId}); 
        response.json({ 'success': true, 'data': customer });
    }catch(e){
        response.json({ 'error': true, 'message': 'error retriving customer data' });
    }
    
}