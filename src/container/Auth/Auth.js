import auth0 from 'auth0-js';

/*
export default class Auth {
    auth0 = new auth0.WebAuth({
        domain: 'wushu06.auth0.com',
        clientID: 'dA2st0faB5PxhcZJK3HCe3n5LmbYM7We',
        redirectUri: 'http://localhost:3000/callback',
        audience: 'https://wushu06.auth0.com/userinfo',
        responseType: 'token id_token',
        scope: 'openid'
    });

    login() {
        this.auth0.authorize();
    }
}
*/

import Auth0Lock from 'auth0-lock'
const authDomain = 'wushu06.auth0.com'
const clientId ='dA2st0faB5PxhcZJK3HCe3n5LmbYM7We'

class AuthService {
    constructor() {
        this.lock = new Auth0Lock(clientId, authDomain, {
            auth: {
                params: {
                    scope: 'openid email'
                },
            },
        })

        this.showLock = this.showLock.bind(this)

        this.lock.on('authenticated', this.authProcess.bind(this))
    }

    authProcess = (authResult) => {
        console.log(authResult)
    }

    showLock() {
        this.lock.show()
    }

    setToken = (authFields) => {
        let {
            idToken,
            exp
        } = authFields
        localStorage.setItem('idToken', idToken)
        localStorage.setItem('exp', exp * 1000)
    }

    isCurrent = () => {
        let expString = localStorage.getItem('exp')
        if (!expString) {
            localStorage.removeItem('idToken')
            return false
        }
        let now = new Date()
        let exp = new Date(parseInt(expString, 10)) //10 is radix parameter
        if ( exp < now ) {
            this.logout()
            return false
        } else {
            return true
        }
    }

    getToken() {
        let idToken = localStorage.getItem('idToken')
        if (this.isCurrent() && idToken) {
            return idToken
        } else {
            localStorage.removeItem('idToken')
            localStorage.removeItem('exp')
            return false
        }
    }

    logout = () => {
        localStorage.removeItem('idToken')
        localStorage.removeItem('exp')
        location.reload()
    }

}

const auth = new AuthService()

export default auth
