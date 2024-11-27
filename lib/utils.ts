import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function slicetxt(txt: string, maxLetters: number) {
  if (txt.length > maxLetters) {
    return `${txt.slice(0, maxLetters)} ...`;
  }
  return txt;
}
export function convertToHTML(input: string) {
  let html = input;

  // Replace newline characters with <br> tags
  html = html.replace(/\\n/g, "\n");
  html = html.replace(/(?:\r\n|\r|\n)/g, "<br>");

  // Convert <strong> and <em> tags
  html = html.replace(/<strong>([^<]+)<\/strong>/g, "<strong>$1</strong>");
  html = html.replace(/<em>([^<]+)<\/em>/g, "<em>$1</em>");

  // Convert <p> tags
  html = html.replace(/<p>([^<]+)<\/p>/g, "<p>$1</p>");

  // Convert <ol> and <li> tags
  html = html.replace(/<ol>([\s\S]*?)<\/ol>/g, "<ol>$1</ol>");
  html = html.replace(/<li>([^<]+)<\/li>/g, "<li>$1</li>");

  // Convert <h2> tags with class attributes
  html = html.replace(/<h2 class="([^"]+)" levels="2">([^<]+)<\/h2>/g, '<h2 class="$1">$2</h2>');

  // Convert <div> tags with class attributes
  html = html.replace(/<div class="([^"]+)">([^<]+)<\/div>/g, '<div class="$1">$2</div>');

  return html;
}
