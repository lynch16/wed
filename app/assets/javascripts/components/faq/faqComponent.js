app.component('faqComponent', {
  templateUrl: 'components/faq/_faq.html',
  controller: faqController,
  controllerAs: "faqCtrl"
});

function faqController() {
  var faqCtrl = this;
  faqCtrl.$onInit = function() {
    faqCtrl.faq = [
    {
      question: "Will there be transporation after the reception?",
      answer: "Shuttles will be provided from the venue to the Hampton Inn and Suites following the Reception. Please note transportation to the event is not provided (carpool is recommended - this hotel is 2.4 mi from the venue so picking your car up the next day is easy!)"
  },{
      question: "What should I wear?",
      answer: "Formal or semi-formal attire - it's up to you! The Bride asks that you refrain from wearing a wedding dress. But whatever you decide, don't forget your dancing shoes!"
  },{
      question: "How long does it take to get to La Piece?",
      answer: "Please allow at least 1 hour from Manchester, NH - Friday traffic can be crazy!!"
    },{
      question: "Where can I park my car? What about overnight?",
      answer: "Overnight parking at La Piece is no problem."
    }, {
      question: "What if I have a question for the Bride and Groom?",
      answer: "Reach out to use via our 'Contact Us' page! We will he happy to get back to you as soon as possible."
  }];
  };
}
