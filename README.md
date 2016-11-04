# _Q&A Forum_

#### _10/28/2016_

#### By _**Andrew Merrell**_

## Description

_Ember application that allows users to ask and answer questions._

## Specifications

| Behavior         | Input         | Output         |
|------------------|---------------|----------------|
| User-submitted questions are displayed on the homepage. | User submits question with title, details and author. | Page displays new question. |
| When question content is clicked on homepage, it pulls up a question detail page. | User click on question content | Question detail page is displayed. |
| Previously submitted questions can be edited by filling out a form. | User clicks "Edit" on the question detail page and resubmits form. | Updated question detail page is displayed. |
| Previously submitted questions can be deleted. | User clicks "Delete" on the question detail page. | Index page is displayed with question removed. |
| Users can reply to questions with answers to a specific question. | User clicks "Add answer" on question detail page and submits form. | Question detail page displays new answer under the question content. |
| Question page displays number of votes for an answer and sorts answers based on this value. | User clicks upvote button on an answer. | Page displays new vote count for each answer and re-sorts, if necessary. |
| User pins question they want to save for later. | User clicks pin button on a question. | Index page displays this question in list of pinned questions. |

## Prerequisites

_You will need the following things properly installed on your computer._

* _[Git](http://git-scm.com/)_
* _[Node.js](http://nodejs.org/) (with NPM)_
* _[Bower](http://bower.io/)_
* _[Ember CLI](http://ember-cli.com/)_
* _[PhantomJS](http://phantomjs.org/)_

## Installation

* `git clone https://github.com/amcmerrell/forum`
* `cd forum`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* _Visit your app at [http://localhost:4200](http://localhost:4200)._

## Known Bugs
_There are currently no known bugs for this project. If you discover any issues, you can reach me via the contact details below._

## Support and contact details
_If you have any questions about this project, please contact Andrew at andrew.m.merrell@gmail.com_

## Technologies Used
* _JavaScript_
* _Ember_
* _Node.js_
* _Sass_
* _HTML_
* _CSS_

### License

*This webpage is licensed under the MIT license.*

Copyright (c) 2016 **_Andrew Merrell_**
