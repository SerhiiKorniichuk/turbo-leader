export const localStorageService = (function(){

    function _setToken(token) {
        localStorage.setItem('token', token)
    }

    function _getAccessToken() {
        return localStorage.getItem('token')
    }

    function _clearToken() {
        localStorage.removeItem('token')
    }

    return {
        setToken : _setToken,
        getAccessToken : _getAccessToken,
        clearToken : _clearToken
    }
})()