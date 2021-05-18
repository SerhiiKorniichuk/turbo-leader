export const localStorageService = (function(){

    // USER
    function _setUserName(username) {
        localStorage.setItem('username', username)
    }
    function _getUserName() {
        return localStorage.getItem('username')
    }

    // TOKEN
    function _setAccessToken(token) {
        localStorage.setItem('token', token)
    }
    function _getAccessToken() {
        return localStorage.getItem('token')
    }
    function _clearAccessToken() {
        localStorage.removeItem('token')
    }

    // REFERRAL
    function _setReferralUser(userId) {
        localStorage.setItem('referralUser', userId)
    }
    function _getReferralUser() {
        return localStorage.getItem('referralUser')
    }
    function _clearReferralUser() {
        localStorage.removeItem('referralUser')
    }

    // CLEAR
    function _clearStorage() {
        localStorage.clear()
    }

    return {
        setUserName: _setUserName,
        getUserName: _getUserName,
        setAccessToken : _setAccessToken,
        getAccessToken : _getAccessToken,
        clearAccessToken : _clearAccessToken,
        setReferralUser: _setReferralUser,
        getReferralUser: _getReferralUser,
        clearReferralUser: _clearReferralUser,
        clearStorage: _clearStorage
    }
})()