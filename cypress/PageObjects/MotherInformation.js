
class MotherInformation {

    firstNameEle = "div[id='__nuxt'] div[class='flex max-[480px]:flex-wrap sm:flex-row sm:py-6 gap-7 content_block sm:mt-[-40px]'] div:nth-child(2) div:nth-child(1) div:nth-child(1) div:nth-child(2) input:nth-child(1)";

    lastNameEle = "div[id='__nuxt'] div[class='flex max-[480px]:flex-wrap sm:flex-row sm:py-6 gap-7 content_block sm:mt-[-40px]'] div:nth-child(2) div:nth-child(1) div:nth-child(1) div:nth-child(2) input:nth-child(1)";

    ethnicityEle = "div[id='__nuxt'] div[class='flex max-[480px]:flex-wrap sm:flex-row sm:py-6 gap-7 content_block sm:mt-[-40px]'] div:nth-child(2) div:nth-child(1) div:nth-child(1) div:nth-child(2) input:nth-child(1)";

    religionEle = "select[name='mother_religion']";

    totalNumberOfChildrenBornAlive = "div[id='__nuxt'] div[class='flex max-[480px]:flex-wrap sm:flex-row sm:py-6 gap-7 content_block sm:mt-[-40px]'] div:nth-child(2) div:nth-child(1) div:nth-child(1) div:nth-child(2) input:nth-child(1)";

    numberOfChildrenStillLivingIncludingThisBirth = "div[id='__nuxt'] div[class='flex max-[480px]:flex-wrap sm:flex-row sm:py-6 gap-7 content_block sm:mt-[-40px]'] div:nth-child(2) div:nth-child(1) div:nth-child(1) div:nth-child(2) input:nth-child(1)";

    numberOfChildrenBornAliveButAreNowDead = "div[id='__nuxt'] div[class='flex max-[480px]:flex-wrap sm:flex-row sm:py-6 gap-7 content_block sm:mt-[-40px]'] div:nth-child(2) div:nth-child(1) div:nth-child(1) div:nth-child(2) input:nth-child(1)";

    occupationEle = "div[class='block col-span-12 sm:col-span-6 relative grid_col_block'] input[type='text']";

    ageEle = "input[placeholder='at the time of this birth (completed years)']";

    houseEle = "textarea[rows='3']";
    provinceEle = "div[id='__nuxt'] div[class='flex max-[480px]:flex-wrap sm:flex-row sm:py-6 gap-7 content_block sm:mt-[-40px]'] div:nth-child(2) div:nth-child(2) select:nth-child(1)";


    setFirstName(fname) {
        cy.get(this.firstNameEle).type(fname);
    }

    setLastName(lname) {
        cy.get("div:nth-child(4) div:nth-child(1) div:nth-child(1) div:nth-child(2) input:nth-child(1)").type(lname);
    }

    setEthnicity(ethnicity) {
        cy.get(this.ethnicityEle).type(ethnicity);
    }

    setReligion() {
        cy.get(this.religionEle).select("Islam");
    }

    setTotalNumberOfChildrenBornAlive() {
        cy.get(this.totalNumberOfChildrenBornAlive).type("3");
    }

    setNumberOfChildrenStillLivingIncludingThisBirth() {
        cy.get(this.numberOfChildrenStillLivingIncludingThisBirth).type("3");
    }

    setNumberOfChildrenBornAliveButAreNowDead() {
        cy.get(this.numberOfChildrenBornAliveButAreNowDead).type("3");
    }

    setOccupationEle(occupation) {
        cy.get(this.occupationEle).type(occupation);
    }

    setAge(age) {
        cy.get(this.ageEle).type(age);
    }

    setHouse(house) {
        cy.get(this.houseEle).type(house);
    }

    setProvince() {
        cy.get(this.provinceEle).select("Lanao Del Sur");
    }

    setMotherCity(city) {
        cy.get("#headlessui-combobox-input-10").type(city);
        cy.wait(5000);
        cy.get("#headlessui-combobox-option-19 > .block").contains("Butig").click();
    }

    setMotherBarangay() {
        cy.get("div[class='input_box preview required'] select[name='mother_geo']").select("Bubonga Ranao");
    }

    submit() {
        cy.get("div[class='inline px-4 ml-auto py-2 next_btn']").click();
    }

}

export default MotherInformation;