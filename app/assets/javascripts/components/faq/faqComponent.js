app.component('faqComponent', {
  templateUrl: 'components/faq/_faq.html',
  controller: faqController,
  controllerAs: "faqCtrl"
});

function faqController() {
  var faqCtrl = this;
  faqCtrl.$onInit = function() {
    faqCtrl.faq = [{
      question: "How long does it take to get to La Piece?",
      answer: "Please allow at least 1 hour from Manchester, NH - Friday traffic can be crazy!!."
    },{
      question: "Where can I park my car? What about overnight?",
      answer: "Overnight parking at La Piece is no problem."
    }, {
      question: "Will there be transporation after the reception?",
      answer: "Get a DD or there will be Ubers nearby! Also, ask the bride and groom about the after party if you're interested."
    }];
  };
}
