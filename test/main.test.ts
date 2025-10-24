import * as p from '../src'

const test1 = p.document(
  p.h1(
    'Hello, world!',
    p.g('this', 'is', 'Mike')
  ),
  'I will be a good developer',
  p.list(2,
    'I will be a good developer',
    'I will be a good developer',
    p.list(
      'I will be a good developer',
      'I will be a good developer',
      p.list(
        'I will be a good developer',
        'I will be a good developer',
      ),
      p.code('console.log("Hello, world!")')
    ),
    p.codeblock('javascript',
      'console.log("Hello, world!")',
      'console.log("Hello, world!")',
    )
  ),
)
console.log(test1())