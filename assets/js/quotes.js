var tag = document.querySelectorAll('[data-quotes]'),
    glossary = [
      '“Understand: people will constantly attack you in life. One of their main weapons will be to instill in you doubts about yourself – your worth, your abilities, your potential. They will often disguise this as their objective opinion, but invariably it has a political purpose – they want to keep you down.” - Robert Greene',
        
      '"There is a time in every man\'s education when he arrives at the conviction that envy is ignorance; that imitation is suicide; that he must take himself for better, for worse, as his portion; that though the wide universe is full of good, no kernel of nourishing corn can come to him but through his toil bestowed on that plot of ground which is given to him to till." - Ralph Waldo Emerson',
      
      '"Human nature is so constituted, that it cannot honor a helpless man, although it can pity him; and even this it cannot do long, if the signs signs of power do not arise.” — Frederick Douglass ',
        
      '“IF ONE IS CONTINUALLY SURVIVING THE WORST THAT LIFE CAN BRING, ONE EVENTUALLY CEASES TO BE CONTROLLED BY A FEAR OF WHAT LIFE CAN BRING." —James Baldwin',

        
      '"I was born alone and I will die alone. I’ve got to do what’s right for me and not live my life the way anybody else wants it.” — 50 Cent',  
    
      '"People who cling to their delusions find it difficult, if not impossible, to learn anything worth learning: a people under the necessity of creating themselves must examine everything, and soak up learning the way the roots of a tree soak up water.” - James Baldmin',
        
      '"I am owner of my might, and I am so when I know myself as unique.” — Max Stirner',
        
      '"Let me point out to you that freedom is not something that anybody can be given; freedom is something people take and people are as free as they want to be.” —James Baldwin',

      '“Life is either a daring adventure or nothing. To keep our faces toward change and behave like free spirits in the presence of fate is strength undefeatable.” - Helen Keller',
        
      '"Now there are…individuals who would rather perish than work without taking pleasure in their work; they are choosy…and have no use for ample rewards if the work is not itself the reward of rewards…. They do not fear boredom as much as work without pleasure; indeed, they need a lot of boredom if their work is to succeed. For…all inventive spirits, boredom is that disagreeable “lull” of the soul that precedes a happy voyage and cheerful winds.”— Friedrich Nietzsche',

      '“Your fears are a kind of prison that confines you within a limited range of action. The less you fear, the more power you will have and the more fully you will live.” ― Robert Greene, The 50th Law ',
        
      '“The knife’s edge that separates failure from success in life. That edge is your attitude, which has the power to help shape your reality.” ― 50 Cent, The 50th Law', 
        
      '“SO OVER YOU IS THE GREATEST ENEMY A MAN CAN HAVE AND THAT IS FEAR.” ― 50 Cent, The 50th Law ',
        
      '"The old musicians stay where they are and become like museum pieces under glass, safe, easy to understand, playing that tired old shit over and over again…. Bebop was about change, about evolution. It wasn’t about standing still and becoming safe. If anybody wants to keep creating they have to be about change. " —Miles Davis',
        
      '“[I]n nooks all over the earth sit men who are waiting, scarcely knowing in what way they are waiting, much less that they are waiting in vain.  Occasionally the call that awakens– that accident which gives the “permission to act — comes too late, when the best youth and strength for action has already been used up by sitting still; and many have found to their horror when they ‘leaped up’ that their limbs had gone to sleep and their spirit had become to heavy.  ‘It is too late,’ they said to themselves, having lost their faith in themselves and henceforth forever useless.” -Friedrich Nietzsche',
        
      '"The hustler’s every waking hour is lived with both the practical and the subconscious knowledge that if he ever relaxes, if he ever slows down, the other hungry, restless foxes, ferrets, wolves, and vultures out there with him won’t hesitate to make him their prey.” —Malcolm X',
        
      '"In the ring, our opponents can gouge us with their nails or butt us with their heads and leave a bruise, but we don’t denounce them for it or get upset with them or regard them from then on as violent types. We just keep an eye on them…not out of hatred or suspicion. Just keeping a friendly distance. We need to do that in other areas. We need to excuse what our sparring partners do, and just keep our distance—without suspicion or hatred.” — Marcus Aurelius', 


      '“MASTER THE INSTRUMENT, MASTER THE MUSIC, THEN FORGET ALL THAT SHIT AND PLAY." —Charlie Parker',
        
      '“MOST PEOPLE CAN’T HANDLE BOREDOM. THAT MEANS THEY CAN’T STAY ON ONE THING UNTIL THEY GET GOOD AT IT. AND THEY WONDER WHY THEY’RE UNHAPPY.” — 50 Cent',

      '“ALL OF MAN’S TROUBLES COME FROM NOT KNOWING HOW TO SIT STILL, ALONE IN A ROOM.” — Blaise Pascal',

      '"This is life, new and strange; strange, because we fear it; new, because we have kept our eyes turned from it…. Men are men and life is life, and we must deal with them as they are; and if we want to change them, we must deal with them in the form in which they exist.” – Richard Wright'
    ]
for (i=0;i<tag.length;i++){
  tag[i].setAttribute('data-headline',i)
  typewriter(i)
}

function typewriter(element){
  var tag = document.querySelector('[data-headline="'+element+'"]')
      word = ~~(Math.random()*glossary.length)
  spellWord(tag,word)
}
function spellWord(tag,word){
  var word = glossary[word],
      letters = word.length,
      count = 0,
      animation = setInterval(function(){
    tag.innerHTML += word[count]
    letters--
    count++
    if (letters == 0){
      clearInterval(animation)
    }
  },0)
}