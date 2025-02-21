
import Login from "../pages/Login";
const login = new Login()

describe('Login Saucedemo', () => {
    let loginData; //variable declaration

    beforeEach(() => {
    cy.fixture('loginData').then((data) => {
        loginData = data; //storing fixture data in a variable
        login.visit();
    })
    })

  it('Login successfully on Saucedemo', ()=> {
    login.getUsernameField().type(loginData.validCredentials.username);
    login.getPasswordField().should('be.visible').type(loginData.validCredentials.password)
    login.getLoginButton().click()

    })
    it.only('Verify user is logged out successfully', ()=> {
     login.getUsernameField().type(loginData.validCredentials.username);
     login.getPasswordField().should('be.visible').type(loginData.validCredentials.password)
     login.getLoginButton().click()
     login.getMenuBar().should('be.visible').click()
     login.getLogout().should('be.visible').click()
    })
   it('Verify unsuccessful login with invalid credentials', ()=>{
    login.getUsernameField().type(loginData.invalidCredentials.username)
    login.getPasswordField().type(loginData.invalidCredentials.password)
    login.getLoginButton().click()
    login.getErrorMessage(). should('contain','Username and password do not match any user in this service')
})

    it('Verify login fails for locked out user', ()=> {
    login.getUsernameField().type(loginData.lockedUser.username)
    login.getPasswordField().type(loginData.lockedUser.password)
    login.getLoginButton().click()
    login.getErrorMessage().should('contain.text', 'Sorry, this user has been locked out.')
    })

    it('Verify login fails when username and password fields are left empty', ()=> {
    login.getLoginButton().click()
    login.getErrorMessage(). should('contain', 'Username is required')

    })


})