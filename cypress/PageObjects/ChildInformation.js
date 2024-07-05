export default class ChildInformation {

    firstNameElement = "body > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)";
    lastNameElement = "body > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)";

    //Dropdown element
    genderElement = "select[name='child_gender']";
    religionElement = "select[name='child_religion']";
    birthdayEement = "input[placeholder='Select Date']";
    birthPlaceElement = "div[class='block col-span-12 sm:col-span-12 relative grid_col_block'] input[type='text']";
    date = "div[aria-label='Calendar wrapper'] div:nth-child(1) div:nth-child(3) div:nth-child(1)";
    dateSelect = ".dp__action_button.dp__action_select";
    regionElement = "div[class='region_dropdown col-span-2'] select[name='child_geo']";
    province = "body > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(10) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > select:nth-child(1)";
    cityElement = "div[class='municipality_dropdown col-span-2'] select[name='child_geo']";
    barangayElement = "body > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(10) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > select:nth-child(1)";
    typeOfBirthEle = "select[name='child_type_of_birth']";
    birthOrderEle = "select[name='birth_order']";
    weightEle = "input[placeholder='Grams']";

    submitEle = "div[class='inline px-4 ml-auto py-2 next_btn']";

    setFirstName(firstName) {
        cy.get(this.firstNameElement).type(firstName);
    }

    setLastName(lastName) {
        cy.get(this.lastNameElement).type(lastName);
    }

    setGender() {
        cy.get(this.genderElement).select("Male");
    }

    setReligion() {
        cy.get(this.religionElement).select("Islam");
    }

    setBirthday(birthday) {
        cy.get(this.birthdayEement).click();
        cy.get(this.date).click();
        cy.get(this.dateSelect).click();
    }

    setPlaceofBirth(placeOfBirth) {
        cy.get(this.birthPlaceElement).type(placeOfBirth);
    }

    setRegion() {
        cy.get(this.regionElement).select("Bangsamoro Autonomous Region in Muslim Mindanao");
    }

    setProvince() {
        cy.get(this.province).select("Lanao Del Sur");
    }

    setCity() {
        cy.get(this.cityElement).select("Butig");
    }

    setBarangay() {
        cy.get(this.barangayElement).select("Butig Proper");
    }

    setTypeOfBirth() {
        cy.get(this.typeOfBirthEle).select("Single");
    }

    setBirthOrder() {
        cy.get(this.birthOrderEle).select("2");
    }

    setWeight(weight) {
        cy.get(this.weightEle).type(weight);
    }

    submitInformation() {
        cy.get(this.submitEle).click();
    }

}