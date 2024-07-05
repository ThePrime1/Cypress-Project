class Login {


    setUsername(username) {
        cy.get("input[placeholder='i.e. 9560091781 / yousuf@gmail.com']").type(username);
    }

    setPassword(password) {
        cy.get("input[placeholder='i.e. password#123']").type(password);
    }

    clickSigninButton() {
        cy.get("button[type='submit']").click();
    }

    verifySignin() {
        cy.get('[href="/logout"]').should("have.text", "Sign Out");
    }

}

export default Login;