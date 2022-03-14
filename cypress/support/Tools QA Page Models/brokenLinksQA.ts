export const requestAndVerify = (
  requestURL: string,
  responseCode: number
): Cypress.Chainable =>
  cy
    .request({
      url: requestURL,
      failOnStatusCode: false,
    })
    .then((response) => {
      expect(response.status).to.eq(responseCode);
    });

export const getAndVerifyImage = (
  imageURL: string,
  imageHeight: number,
  imageWidth: number
): Cypress.Chainable =>
  cy.get(imageURL).should(([img]) => {
    expect(img.naturalHeight).to.equal(imageHeight);
    expect(img.naturalWidth).to.equal(imageWidth);
  });

export const getValidImage = (): Cypress.Chainable =>
  cy.get(':nth-child(2) > [src="/images/Toolsqa.jpg"]');

export const getBrokenImage = (): Cypress.Chainable =>
  cy.get('[src="/images/Toolsqa_1.jpg"]');
