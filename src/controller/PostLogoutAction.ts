import {Request, Response} from "express";

export async function postLogoutAction(request: Request, response: Response) {
    try
    {
       if(request.session['customer'])
       {
          request.session['customer'] = null;
       }
       response.json({ 'success': true, 'message': 'logged out successfully' }); 
    }catch(e){
        response.json({ 'error': true, 'message': 'Error logged out' });
    }
    
}