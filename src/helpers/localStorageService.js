export const localStorageService = (function(){

    function _setUserName(userName) {
        localStorage.setItem('userName', userName)
    }

    function _setToken(token) {
        localStorage.setItem('token', token)
    }

    function _getUserName() {
        return localStorage.getItem('userName')
    }

    function _getAccessToken() {
        return localStorage.getItem('token')
    }

    function _clearToken() {
        localStorage.removeItem('token')
    }

    function _clearStorage() {
        localStorage.clear()
    }

    return {
        setUserName: _setUserName,
        setToken : _setToken,
        getUserName: _getUserName,
        getAccessToken : _getAccessToken,
        clearToken : _clearToken,
        clearStorage: _clearStorage
    }
})()