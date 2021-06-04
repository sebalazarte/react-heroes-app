import { authReducer } from "../../components/auth/authReducer";
import { types } from "../../types/types";

describe('Pruebas en authRedurer', () => {

    test('Debe retornar el estado por defecto', () => {

        const state = authReducer({logged:false}, {});
        expect(state).toEqual({ logged: false });
    });

    test('debe autenticar y colocar el name del usuario', () => {

        const action = {
            type: types.login,
            payload: {
                name: 'Hernando'
            }
        }

        const state = authReducer({ logged: false }, action);
        expect(state).toEqual({ logged: true, name: 'Hernando' });
    });
    

    test('debe borrar el name del usuario y poner el log en false', () => {
        
        const action = {
            type: types.logout,
        }

        const state = authReducer({ logged: true, name: 'Hernando' }, action);
        expect(state).toEqual({ logged: false });
    });
    
});