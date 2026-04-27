import { truncate } from "@/helpers/truncate/truncate";

describe("truncate", () => {
  describe("when text is within the limit", () => {
    it("should return the original text when length equals maxLength", () => {
      expect(truncate("hello", 5)).toBe("hello");
    });

    it("should return the original text when length is less than maxLength", () => {
      expect(truncate("hi", 10)).toBe("hi");
    });

    it("should return empty string when text is empty", () => {
      expect(truncate("", 5)).toBe("");
    });
  });

  describe("when text exceeds the limit", () => {
    it("should truncate and append ellipsis", () => {
      expect(truncate("Hello, world!", 5)).toBe("Hello...");
    });

    it("should trim trailing spaces before appending ellipsis", () => {
      expect(truncate("Hello world", 6)).toBe("Hello...");
    });

    it("should truncate to exactly maxLength characters before the ellipsis", () => {
      expect(truncate("abcdef", 3)).toBe("abc...");
    });
  });

  describe("edge cases", () => {
    it("should return only ellipsis when maxLength is 0", () => {
      expect(truncate("hello", 0)).toBe("...");
    });

    it("should truncate to a single character", () => {
      expect(truncate("hello", 1)).toBe("h...");
    });
  });
});
