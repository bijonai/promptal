<div align="center">
  <h1>Promptal</h1>
  <p>✍️ Promptal：A tool library for writing prompt words in a more efficient and readable way.</p>
</div>

## Installation

```bash
npm install promptal
pnpm add promptal
yarn add promptal
bun add promptal
```

## Usage
```ts
import * as p from 'promptal'
const doc = p.document(
  p.h1(
    'Hello, world!',
    p.g('This', 'is', 'Mike')
  ),
  p.list(
    'Good 1',
    list(2,
      'This good is pretty good',
      'This good is not so good'
    ),
    'Good 2',
    list(2,
      'This good is bad',
      'This good is ugly'
    )
  )
)
console.log(doc())
```

<details>
  <summary>Preview</summary>
  <pre><code>
# Hello, world! 
This is Mike

- Good 1
  - This good is pretty good
  - This good is not so good
- Good 2
  - This good is bad
  - This good is ugly
  </code></pre>
</details>

## APIs

### Titles
<table>
  <thead>
    <tr>
      <th>API</th>
      <th>Description</th>
      <th>Markdown Result</th>
      <th>Preview</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>h1('Hello, world!')</td>
      <td>Creates a level 1 heading</td>
      <td><code># Hello, world!</code></td>
      <td><h1>Hello, world!</h1></td>
    </tr>
    <tr>
      <td>h2('Subtitle')</td>
      <td>Creates a level 2 heading</td>
      <td><code>## Subtitle</code></td>
      <td><h2>Subtitle</h2></td>
    </tr>
    <tr>
      <td>h3('Section')</td>
      <td>Creates a level 3 heading</td>
      <td><code>### Section</code></td>
      <td><h3>Section</h3></td>
    </tr>
    <tr>
      <td>h4('Subsection')</td>
      <td>Creates a level 4 heading</td>
      <td><code>#### Subsection</code></td>
      <td><h4>Subsection</h4></td>
    </tr>
    <tr>
      <td>h5('Paragraph')</td>
      <td>Creates a level 5 heading</td>
      <td><code>##### Paragraph</code></td>
      <td><h5>Paragraph</h5></td>
    </tr>
    <tr>
      <td>h6('Subparagraph')</td>
      <td>Creates a level 6 heading</td>
      <td><code>###### Subparagraph</code></td>
      <td><h6>Subparagraph</h6></td>
    </tr>
  </tbody>
</table>

### Text Formatting
<table>
  <thead>
    <tr>
      <th>API</th>
      <th>Description</th>
      <th>Markdown Result</th>
      <th>Preview</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>b('Bold text')</td>
      <td>Makes text bold</td>
      <td><code>**Bold text**</code></td>
      <td><b>Bold text</b></td>
    </tr>
    <tr>
      <td>i('Italic text')</td>
      <td>Makes text italic</td>
      <td><code>*Italic text*</code></td>
      <td><i>Italic text</i></td>
    </tr>
    <tr>
      <td>s('Strikethrough')</td>
      <td>Adds strikethrough formatting</td>
      <td><code>~~Strikethrough~~</code></td>
      <td><s>Strikethrough</s></td>
    </tr>
    <tr>
      <td>u('Underline')</td>
      <td>Underlines text</td>
      <td><code>__Underline__</code></td>
      <td><u>Underline</u></td>
    </tr>
    <tr>
      <td>del('Deleted')</td>
      <td>Marks text as deleted</td>
      <td><code>~~Deleted~~</code></td>
      <td><del>Deleted</del></td>
    </tr>
    <tr>
      <td>ins('Inserted')</td>
      <td>Marks text as inserted</td>
      <td><code>++Inserted++</code></td>
      <td><ins>Inserted</ins></td>
    </tr>
  </tbody>
</table>

### Code
<table>
  <thead>
    <tr>
      <th>API</th>
      <th>Description</th>
      <th>Markdown Result</th>
      <th>Preview</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>code('inline code')</td>
      <td>Creates inline code formatting</td>
      <td><code>`inline code`</code></td>
      <td><code>inline code</code></td>
    </tr>
    <tr>
      <td>codeblock('js', 'console.log("hello")')</td>
      <td>Creates a code block with language syntax highlighting</td>
      <td><code>```js<br>console.log("hello")<br>```</code></td>
      <td><pre><code>console.log("hello")</code></pre></td>
    </tr>
  </tbody>
</table>

### Links and Media
<table>
  <thead>
    <tr>
      <th>API</th>
      <th>Description</th>
      <th>Markdown Result</th>
      <th>Preview</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>link('https://example.com', 'Example')</td>
      <td>Creates a hyperlink with text and URL</td>
      <td><code>[Example](https://example.com)</code></td>
      <td><a href="https://example.com">Example</a></td>
    </tr>
    <tr>
      <td>image('https://example.com/img.png', 'Alt text')</td>
      <td>Embeds an image with alt text</td>
      <td><code>![Alt text](https://example.com/img.png)</code></td>
      <td>🖼️ Image</td>
    </tr>
    <tr>
      <td>footnote('1', ': Footnote text')</td>
      <td>Creates a footnote reference</td>
      <td><code>[^1]: Footnote text</code></td>
      <td>Footnote reference</td>
    </tr>
  </tbody>
</table>

### Lists
<table>
  <thead>
    <tr>
      <th>API</th>
      <th>Description</th>
      <th>Markdown Result</th>
      <th>Preview</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>list('Item 1', 'Item 2')</td>
      <td>Creates an unordered list with "-" marker (default, type 1)</td>
      <td><code>- Item 1<br>- Item 2</code></td>
      <td><ul><li>Item 1</li><li>Item 2</li></ul></td>
    </tr>
    <tr>
      <td>list(1, 'Item 1', 'Item 2')</td>
      <td>Creates an unordered list with "-" marker (type 1)</td>
      <td><code>- Item 1<br>- Item 2</code></td>
      <td><ul><li>Item 1</li><li>Item 2</li></ul></td>
    </tr>
    <tr>
      <td>list(2, 'Item 1', 'Item 2')</td>
      <td>Creates an unordered list with "*" marker (type 2)</td>
      <td><code>* Item 1<br>* Item 2</code></td>
      <td><ul><li>Item 1</li><li>Item 2</li></ul></td>
    </tr>
    <tr>
      <td>list(3, 'Item 1', 'Item 2')</td>
      <td>Creates an unordered list with "+" marker (type 3)</td>
      <td><code>+ Item 1<br>+ Item 2</code></td>
      <td><ul><li>Item 1</li><li>Item 2</li></ul></td>
    </tr>
    <tr>
      <td>list('Parent', list('Child 1', 'Child 2'))</td>
      <td>Creates nested lists - child lists are automatically indented with 2 spaces</td>
      <td><code>- Parent<br>&nbsp;&nbsp;- Child 1<br>&nbsp;&nbsp;- Child 2</code></td>
      <td><ul><li>Parent</li><ul><li>Child 1</li><li>Child 2</li></ul></ul></td>
    </tr>
  </tbody>
</table>

### Document Structure
<table>
  <thead>
    <tr>
      <th>API</th>
      <th>Description</th>
      <th>Markdown Result</th>
      <th>Preview</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>sections('Part 1', 'Part 2')</td>
      <td>Joins content with double newlines (paragraph separator)</td>
      <td><code>Part 1<br><br>Part 2</code></td>
      <td>Part 1<br><br>Part 2</td>
    </tr>
    <tr>
      <td>g('word1', 'word2')</td>
      <td>Joins content with spaces (group)</td>
      <td><code>word1 word2</code></td>
      <td>word1 word2</td>
    </tr>
    <tr>
      <td>nl('line1', 'line2')</td>
      <td>Joins content with single newlines</td>
      <td><code>line1<br>line2</code></td>
      <td>line1<br>line2</td>
    </tr>
    <tr>
      <td>tab('nested', 'content')</td>
      <td>Indents content with 2 spaces</td>
      <td><code>&nbsp;&nbsp;nested<br>&nbsp;&nbsp;content</code></td>
      <td>&nbsp;&nbsp;nested<br>&nbsp;&nbsp;content</td>
    </tr>
  </tbody>
</table>

### HTML Tags
<table>
  <thead>
    <tr>
      <th>API</th>
      <th>Description</th>
      <th>Markdown Result</th>
      <th>Preview</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>tag('div', 'content')</td>
      <td>Wraps content in custom HTML tags</td>
      <td><code>&lt;div&gt;content&lt;/div&gt;</code></td>
      <td><div>content</div></td>
    </tr>
  </tbody>
</table>
