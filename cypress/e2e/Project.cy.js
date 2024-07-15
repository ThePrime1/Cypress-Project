import ChildInformation from "../PageObjects/ChildInformation";
import Login from "../PageObjects/Login";
import UploadAttachment from "../PageObjects/UploadAttachment";
import MotherInformation from "../PageObjects/MotherInformation";

describe("Service Automation with POM Pattern", () => {
    it("Certificate of Live Birth Service Automation", () => {
        cy.visit("https://citizen-dev.ph.orangebd.com");

        cy.get('#headlessui-disclosure-button-1').click();

        cy.get('.pb-4 > .flex > .inline-flex').click();

        //Login Process

        let login = new Login();

        login.setUsername("01907371151");
        login.setPassword("pH12345678");
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
        ci.setPlaceofBirth("Philipines");
        ci.setRegion();
        ci.setProvince();
        ci.setCity("Cal");
        ci.setBarangay();
        ci.setTypeOfBirth();
        ci.setBirthOrder();
        ci.setWeight("2500");
        ci.submitInformation();

        let mi = new MotherInformation();

        mi.setFirstName("Sara");
        mi.setLastName("Hitler");
        mi.setEthnicity("Asian");
        mi.setReligion();
        mi.setTotalNumberOfChildrenBornAlive();
        mi.setNumberOfChildrenStillLivingIncludingThisBirth();
        mi.setNumberOfChildrenBornAliveButAreNowDead();
        mi.setOccupationEle("House Wife");
        mi.setAge("30");
        mi.setHouse("12 street battu");
        mi.setProvince();
        mi.setMotherCity("Bu");
        mi.setMotherBarangay();
        mi.submit();
    })
})