import {JSDOM} from 'jsdom'
export default class Tessaron {
  private document: Document;

  private constructor(html: string) {
    if (typeof window !== "undefined" && window.DOMParser) {
      const parser = new DOMParser();
      this.document = parser.parseFromString(html, "text/html");
    } else {
    
      this.document = new JSDOM(html).window.document;
    }
  }

  static async read(html: string): Promise<Tessaron> {
    return new Tessaron(html);
  }

  select(selector: string): Element[] {
    return Array.from(this.document.querySelectorAll(selector));
  }

  selectOne(selector: string): Element | null {
    return this.document.querySelector(selector);
  }

  text(selector: string): string {
    return this.select(selector)
      .map((el) => el.textContent?.trim() || "")
      .join(" ");
  }

  html(selector: string): string {
    const element = this.selectOne(selector);
    return element ? element.outerHTML : "";
  }

  attr(selector: string, attribute: string): string | null {
    return this.selectOne(selector)?.getAttribute(attribute) || null;
  }

  find(parentSelector: string, childSelector: string): Element[] {
    const parent = this.selectOne(parentSelector);
    return parent ? Array.from(parent.querySelectorAll(childSelector)) : [];
  }

  parent(selector: string): Element | null {
    return this.selectOne(selector)?.parentElement || null;
  }

  children(selector: string): Element[] {
    const element = this.selectOne(selector);
    return element ? Array.from(element.children) : [];
  }

  next(selector: string): Element | null {
    return this.selectOne(selector)?.nextElementSibling || null;
  }

  prev(selector: string): Element | null {
    return this.selectOne(selector)?.previousElementSibling || null;
  }
}
