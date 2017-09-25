app.component('partyComponent', {
  templateUrl: 'components/party/_party.html',
  controller: partyController,
  controllerAs: "partyCtrl"
});

function partyController() {
  var partyCtrl = this;
  partyCtrl.$onInit = function() {
    partyCtrl.maidOfHonor = {
      name: 'Tori Hutchinson',
      imgURL: 'assets/15109531_10209777745614377_5809464924090842763_n.jpg',
      description: 'Befriended the Bride under the monkey bars in 3rd grade. Tori enjoys long walks on the beach, anything and everything that is the color pink, and splitting bottles of champagne with the Bride.'
    };
    partyCtrl.bestMan ={
      name: 'Timothy Eagan',
      imgURL: 'assets/1926830_10152335310712105_1656148554059273514_n.jpg',
      description: "1 of 3, no really, this guy is a triplet. The Groom has been a regular attendee of the Eagan family Easter Dinner for 4 years running. Tim is also the love of Daisy's life. He has a love/hate relationship with Gin."
    };
    partyCtrl.bridesmaids = [{
      name: 'Ali Garner',
      imgURL: 'assets/196353_1944208885427_4307153_n.jpg',
      description: 'Sisters with the Bride since 1991 - Ali is an eyeball enthusiast but will not be giving eye exams during the wedding. '
    }, {
      name: 'Sara Bee',
      imgURL: 'assets/1383145_10200932520618429_838699888_n.jpg',
      description: "Became friends with the Bride during a Mariah Carey concert when they were 12 years young. Sara is always on the go. When she's not skiiing, boating, hiking, attending a music festival, or traveling to Italy with the Bride, she finds time for dedicating Karaoke songs to her boyfriend of 14 years."
    }, {
      name: 'Tara McLaughlin',
      imgURL: 'assets/10676169_10206264208629957_3708870934209907796_n.jpg',
      description: "Currently residing in LA, Tara is a night owl who spends her nights either in pajamas reading until 4am or attending the Golden Globes. Initially bonded with the Bride during an AP Biology summer project, they remain long distance pals through their mutual love of Papa Johns pizza and secretly rummaging their parents' liquor cabinets."
    }, {
      name: 'Julia Heald',
      imgURL: 'assets/10173583_10201653556203790_1045325341_n.jpg',
      description: "Best friends with a dolphin (yes, really). Julia is a Marine Mammal Trainer in Clearwater, Florida and is by far the Bride's bubbliest friend. Smiling is definitely her favorite."
    }];

    partyCtrl.groomsmen = [{
      name: 'Connor Scofield',
      imgURL: 'assets/12525162_1750647025167196_2744116062943660081_o.jpg',
      description: "Befriended the Groom via Cragislist circa 2010. Connor is a former producer of the Lingerie Football League and currently lives in LA ignoring his BS in Finance working as Head of Post Production for Stept, a commercial production company."
    }];
  };
}
