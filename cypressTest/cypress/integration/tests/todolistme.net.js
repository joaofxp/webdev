context("ToDo Assertions", () => {
    beforeEach(() => {
        cy.visit("https://todolistme.net/");
    });

    describe("Afirmações sobre o primeiro card", () => {
        it("verificar se o primeiro card já existe e está visível", () => {
            cy.get("#mytodos")
                .find("li:first")
                .should("have.class", "moveabletodo")
                .find("span")
                .should("contain", "Howdy. Let's get you up and running.")
                .should("match", "span");
        });

        it(".should() verificar se o primeiro card está visivel", () => {
            cy.get("#mytodos")
                .find("li:first")
                .should("have.class", "moveabletodo")
                .find("span")
                .should("be.visible");
        });
    });

    describe("Finalizar o primeiro card", () => {
        it("verificar se o primeiro card está com a função de finalizar", () => {
            cy.get("#mytodos")
                .find("li:first")
                .should("have.class", "ui-sortable-handle")
                .find("input")
                .should("have.attr", "onclick")
                .and("include", "finish_todo");
        });

        it("executar a função de finalizar no primeiro card e verificar o funcionamento", () => {
            cy.get("#todo_0").find("input").as("firstCard").click();

            cy.wait(1000);

            cy.get("#mytodos").find("li:first").should("not.have.id", "todo_0");
        });
    });

    describe("Adicionar um card e verificar se adicionou", () => {
        it("Ação e verificação", () => {
            cy.get("#newtodo")
                .type("New Test Card")
                .should("have.value", "New Test Card")
                .type("{enter}");

            cy.get("#mytodos")
                .find("li:last")
                .should("have.class", "moveabletodo")
                .find("span")
                .should("have.text", "New Test Card")
                .should("contain", "New Test Card")
                .should("have.html", "New Test Card")
                .should("match", "span");
        });
    });

    describe("Remover um card", () => {
        it("Ação e verificação", () => {
            cy.get("#mytodos")
                .find("li:first")
                .should("have.class", "moveabletodo")
                .trigger("mouseover")
                .find("img")
                .should("have.class", "delete")
                .click({ force: true });

            cy.wait(1000);

            cy.get("#mytodos").children().should("have.length", 6);
        });
    });

    describe("Alterar ultimo card", () => {
        it("Ação", () => {
            cy.get("#mytodos")
                .find("li:last")
                .should("have.class", "moveabletodo")
                .dblclick()
                .wait(1000)
                .find("input")
                .should("have.id", "updatebox")
                .first()
                .invoke("attr", "value", "Novo Texto Editado")
                .type("{enter}");

            cy.wait(1000);

            cy.get("#mytodos")
                .find("li:last")
                .should("have.class", "moveabletodo")
                .and(
                    "not.have.text",
                    "All done. Tick all the items off then hit the trash icon below."
                );
        });
    });
});
