describe("LimeHome API", function () {
  const url = "https://api.limehome.com/properties/v1/public/properties/129";

  beforeEach(function () {
    cy.clearAllLocalStorage();
    cy.clearCookies();
    cy.fixture("testData").as("data");
  });

  it("verify that the API endpoint returns a 200 OK response status code", function () {
    cy.request({
      url: url,

      method: "GET",
    }).then((resp) => {
      expect(resp.status).to.eq(200);
    });
  });
  it("verify that the API endpoint returns the expected response body", function () {
    cy.request({
      url: url,

      method: "GET",
    }).then((resp) => {
      expect(resp.status).to.eq(200);
      expect(resp.body.message).to.eq(this.data.message);
      expect(resp.body.payload.id).to.eq(this.data.payload.id);
      expect(resp.body.payload.location).to.deep.equal(
        this.data.payload.location,
      );
      expect(resp.body.payload.description).to.eq(
        this.data.payload.description,
      );

      expect(resp.body.payload.parking).to.eq(this.data.payload.parking);
      expect(resp.body.payload.things_to_know).to.eq(
        this.data.payload.things_to_know,
      );
      expect(resp.body.payload.house_rules).to.eq(
        this.data.payload.house_rules,
      );
    });
  });
});
