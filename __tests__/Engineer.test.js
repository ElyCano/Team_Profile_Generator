const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
  const testGithub = "ElizabethCano";
  const employeeInstance = new Engineer(
    "Elizabeth",
    2,
    "ely.cano2033@gmail.com",
    testGithub
  );
  expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
  const testGithub = "ElizabethCano";
  const employeeInstance = new Engineer(
    "Elizabeth",
    2,
    "ely.cano2033@gmail.com",
    testGithub
  );
  expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
  const returnValue = "Engineer";
  const employeeInstance = new Engineer(
    "Elizabeth",
    2,
    "ely.cano2033@gmail.com",
    "ElizabethCano"
  );
  expect(employeeInstance.getRole()).toBe(returnValue);
});
