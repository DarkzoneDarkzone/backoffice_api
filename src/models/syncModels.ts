import { Admins } from './admins';
import { sequelize } from '../util/database';

export function OnInit(){
    const declaredModel = {
        Admins
    }
    sequelize.sync(); 
}
