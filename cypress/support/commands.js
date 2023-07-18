Cypress.Commands.add("calculate", (input1, input2, operator) => {
  cy.get('[ng-model="first"]').type(input1);
  cy.get('[ng-model="operator"]').select(operator);
  cy.get('[ng-model="second"]').type(input2);
  cy.get("#gobutton").click();
});

Cypress.Commands.add(
  "verifyHistory",
  (input1, input2, operator, row, result, time) => {
    cy.get('[class="table"]')
      .find("tbody")
      .find("tr")
      .eq(row)
      .find("td")
      .eq(0)
      .should("be.visible")
      .then(($timeElem) => {
        const timeText = $timeElem.text().trim();
        const formattedTimeText = timeText.replace(/:\d{2}\s/, " ");
        let currentTime;

        if (time.getSeconds() > 58) {
          const hours = time.getHours() % 12 || 12;
          const minutes = time.getMinutes();
          const ampm = hours >= 12 ? "PM" : "AM";
          const nextMinute = (minutes + 1) % 60;
          currentTime = `${hours}:${
            nextMinute < 10 ? "0" + nextMinute : nextMinute
          }:00 ${ampm}`;
        } else {
          currentTime = new Date().toLocaleTimeString("en-US", {
            hour12: true,
            hour: "numeric",
            minute: "numeric",
          });
        }

        expect(formattedTimeText).to.eq(currentTime);
      });

    cy.get('[class="table"]')
      .find("tbody")
      .find("tr")
      .eq(row)
      .find("td")
      .eq(1)
      .invoke("text")
      .then((text) => {
        expect(text.replace(/\n|\s/g, "")).to.eq(
          `${input1}${operator}${input2}`,
        );
      });

    cy.get('[class="table"]')
      .find("tbody")
      .find("tr")
      .eq(row)
      .find("td")
      .eq(2)
      .should("be.visible")
      .and("contain.text", result);
  },
);
