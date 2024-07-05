import ChildInformation from "../PageObjects/ChildInformation";
import Login from "../PageObjects/Login";
import UploadAttachment from "../PageObjects/UploadAttachment";

describe("Service Automation with POM Pattern", () => {
    it("Certificate of Live Birth Service Automation", () => {
        cy.visit("Confidential");

        cy.get('#headlessui-disclosure-button-1').click();

        cy.get('.pb-4 > .flex > .inline-flex').click();

        //Login Process

        let login = new Login();

        login.setUsername("Confidential");
        login.setPassword("Confidential");
        login.clickSigninButton();
        login.verifySignin();

        //Selecting a service
        cy.get('.space-y-1 > [href="/service"]').click();
        cy.get('[href="/service/live-birth"] > .flex').click();
        //Click apply button
        cy.get('.apply_btn').click();
        cy.get('.flex-row > .inline-flex').click()

        let ua = new UploadAttachment();
        ua.setValidId();
        ua.setSedula();
        ua.setBarangayCertificate();
        ua.submitAttachment();
        ua.verifySubmit();

        let ci = new ChildInformation();
        ci.setFirstName("John");
        ci.setLastName("Doe");
        ci.setGender();
        ci.setReligion();
        ci.setBirthday();
        ci.setPlaceofBirth("Dhaka");
        ci.setRegion();
        ci.setProvince();
        ci.setCity();
        ci.setBarangay();
        ci.setTypeOfBirth();
        ci.setBirthOrder();
        ci.setWeight("2500");
        ci.submitInformation();
    })
})