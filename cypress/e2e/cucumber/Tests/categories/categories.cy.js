import { Given , When , Then  } from "cypress-cucumber-preprocessor/steps";

Given("the user navigate the magento website",()=>{
    cy.visit("/").wait(5000)

})
When("the user click on WhatsNew from nav section" ,()=>{
cy.contains("span","What's New").click()

})

    Then("the item in in the New In Womens section are available" ,()=>{
        cy.wait(4000)
       cy.get(".sidebar-main").find('li').first().nextAll()
        .then((categories)=>{
           
            for (let i= 0; i<categories.length; i++) {
                cy.wrap(categories[i]).invoke('text').then((categoriesNa)=>{
                
                    cy.log(categoriesNa);
                       })
            }
            })
    })
        


