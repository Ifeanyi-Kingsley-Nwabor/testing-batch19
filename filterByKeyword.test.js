const filterByKeyword = require("./filterByKeyword");

describe("URL filter function", () => {
  it("Should filter a string (url) by a search keyword", () => {
    const input = [
      { id: 1, url: "https://www.url1.com" },
      { id: 2, url: "https://www.url2.com" },
      { id: 3, url: "https://www.link3.com" },
    ];
    const output = [{ id: 3, url: "https://www.link3.com" }];
    expect(filterByKeyword(input, "link")).toEqual(output);
    expect(filterByKeyword(input, "LINK")).toEqual(output);
    expect(filterByKeyword(input, "LiNk")).toEqual(output);
  });

  it("Should throw an error when the keyword is empty", () => {
    const input = [];
    expect(() => filterByKeyword(input, "")).toThrow(
      Error("Search keyword cannot be empty")
    );
  });

  it("Should return null when the keyword does not match any url", () => {
    const input = [{ id: 3, url: "https://www.link3.com" }];
    expect(filterByKeyword(input, "url")).toBe(null);
  });
});
