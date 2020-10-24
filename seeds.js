var mongoose = require("mongoose");
var Character = require("./models/characters");
var Comment   = require("./models/comment");
 
var data = [
    {
      name : "Scott McCall", 
	  image : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSngvr7yyVlo5PESpZL55UybpqJ7Oa4NmE7yQ&usqp=CAU",
	  description : "Scott McCall is the primary protagonist of the TV show Teen Wolf. He is the son of Melissa McCall and Rafael McCall, Scott is a bitten werewolf.The character is played by Tyler Posey with actor Steele Gagnon playing youngScott in the episode Required Reading.Initially frightened by his new abilities, Scott sought to cure himself. He's since embraced his supernatural nature and attempts to use his abilities to protect his friendsand family against supernatural threats. He is aided by his Teen Wolf Pack which range from human like his best friend Stiles Stilinski to many forms of supernatural creatures like like his first bitten Beta LiamDunbar. " 
    },
    {
        name : "Stiles Stilinski",
		image : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR42KITOdA451CRMWQveJxomFuxsj7E7v17yA&usqp=CAU", 
		description : " Mieczysław Stilinski, better known as Stiles Stilinski, is one of the main characters and the deuteragonist of Teen Wolf. He is the son of Sheriff Noah Stilinski and the late Claudia Stilinski, the best friend and brother in all but blood with Scott McCall. He is also the boyfriend of Lydia Martin.Stiles was first introduced as a curious, hyperactive, and sarcastic high school student whose decision to go out looking for a dead body in the woods led to him getting caught by his father, the Sheriff of Beacon County, and also led to his best friend Scott getting bitten by a Werewolf. From then on, Stiles has continued getting involved in the supernatural world despite having no powers of his own, doing his best to support his best friend and their growing pack while protecting the town from supernatural influences.By the end of Season 1, he became a hero in his own right by saving Lydia Martin from then-Alpha Peter Hale, and though Peter offered him the Bite as a reward for his help, he ultimately declined because he had no interest in being like Peter,no matter how tempted he was to have supernatural abilities of his own. Due to his knowledge of the law and investigations as a result of being the son of a police officer, Stiles takes great satisfaction in following the clues to lead him to supernatural threats such as the Kanima, the Alpha Pack, and the Darach."
    },
    {   name: "Alison Argent", 
	    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSPhPR8CYQwSFrdPkDMkzrZykY8vybeZVoo3g&usqp=CAU", 
	    description : " Allison Argent was a main character and the former female lead of the Teen Wolf series. She is the daughter of Chris Argent and Victoria Argent, the niece of Kate Argent, the granddaughter of Gerard Argent, and a descendant of Marie-Jeanne Valet and Henri Argent. Despite being descended from a long line of prolific French Werewolf Hunters, Allison was unaware of her legacy as a member of the Argent Family until shortly after her seventeenth birthday, when her aunt Kate introduced her to the world of the supernatural. Though she was originally resistant to her heritage, Allison finally began to seriously train in combat and the use of a multitude of weapons during her sophomore and junior year at Beacon Hills High School, where she found that she had a natural affinity for the craft."
    },
	{
		name : "Otis Milburn",
		image : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSA1Hy0eQ2fbpip_Cl-qyHV_U-8TXjE-iUEoA&usqp=CAU",
		description : "Otis grew up as the son of two sex and relationship therapists, Remi and Jean Milburn, from which he acquired an extensive knowledge of sex and relationship psychology, placing him well to give advice to his peers.At some point during Otis' childhood, he witnessed his father having sexual intercourse with one of his clients, which left him confused and scared due to his lack of understanding. Upon asking his mother about the situation, she discovered Remi had cheated on her and, as a self-believed comfort, told Otis what sex involved and added that it could ruin lives as well as bring pleasure to them. This knowledge gave Otis undiagnosedform of PTSD which affected him in later life. Jean split with Remi, causing him to move to America, and raised Otis alone. Accordingly, Jean became extremely protective of her son which made her decide to not involve herself in serious relationships, instead opting for a revolving door of one-night stands with clients and strangers alike; something Otis evidently disapproves of."
	},
	{
		name : "Maeve Wiley", 
		image : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSfU7gTZMQEWYFfzo2QqdydcYtMWYB5_aaATw&usqp=CAU", 
		description : "Maeve Wiley is one of the main characters in Sex Education. She is portrayed by Emma Mackey.Maeve is an intelligent and sarcastic social outcast and “bad girl” at Moordale Secondary School, who befriends Otis Milburn in sixth-form when the two begin a sex therapy clinic to make money off of their peers.Maeve was raised by her older brother, Sean, in a trailer park in the small town of Moordale after their father left them and their mother, a drug addict, was arrested for drug dealing. A few months before Maeve reached sixth-form at Moordale Secondary School, Sean similarly abandoned her, forcing Maeve to scrap for money by doing her peers’homework for them in order to afford her caravan’s rent.When Maeve was fourteen, she was invited to the Simon Furthassle's birthday party. There, he tried to kiss her, but she rejected him. In revenge, he decidedto spread a rumour about Maeve that she gave him a blowjob and bite his penis, hence her nickname as 'the cock-biter', which swayed a large amount of students to turn their backs on her, or even harass her about performing sexual acts for money. This led Maeve to become an outcast within the school, as she distanced herself from the majority of people with few exceptions, such as Aimee and Jackson."
	},
	{
		 name : "derek Hale",
		 image : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQHf428oKgCEr8tXzlWZNzZkdOhcraxOFleaQ&usqp=CAU", 
		 description : "Derek S. Hale is a former main character and current guest character on Teen Wolf. He is the son of the renowned Alpha Werewolf Talia Hale and an unnamed father, and is also the younger brother of Laura Hale, the older brother of Cora Hale, the nephew of Peter Hale and the cousin of Malia Tate.As a born Beta Werewolf in the centuries-old Hale Pack, Derek grew up knowing about the supernatural and embracing his lycanthropy. However,after the majority of his family was killed in a house fire set by Kate Argent and her co-conspirators, Derek and his sister Laura fled to New York for several years before they returned home.Shortly afterward, Laura was murdered in order for her killer to steal her Alpha powers, forcing Derek to track and battle against this new Alpha, only to learn that it was actually his uncle Peter Hale. Upon learning that Peter's killing of Laura was premeditated and not an accident like he claimed, Derek teamed up with Peter's first Beta, Scott McCall and his friends, along with Allison and Chris Argent, to kill him. It was Derek that gave him the killing blow in retribution for killing Laura, which caused Derek to gain Peter's Alpha status.Sometime later, when Derek realized the Alpha Pack intended to recruit him, Derek began biting and turning several teenagers in hopes of building his own pack to help fight against them. Recipients of Derek's bite included Jackson Whittemore, Isaac Lahey, Erica Reyes, and Vernon Boyd III, though only the latter three actually joined the pack. In Season 3, Derek's pack expanded to included Peter and the newly-returned Cora, his younger sister, but his pack was short-lived, as the rest of his Betas were either killed (in the cases of Boyd and Erica) or left the group (such as Isaac, who subsequently joined Scott McCall's new pack after he ascended to True Alpha status)."
	},
	{
		 name : "Peter Hale",
		 image : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS7pzxyyx4RhaWdbKCay1XxN1W2guhIBZDy-Q&usqp=CAU", 
		 description : "Peter Hale is a supporting character in Teen Wolf and was the main antagonist of Season One and the two main antagonists along with Kate Argent of Season Four. He is the younger brother of the late Alpha Talia Hale, the uncle of Laura, Derek, and Cora Hale, and the biological father of Malia Tate. He was also the Alpha who turned Scott McCall into a Werewolf, and who bit Lydia Martin and activated her latent Banshee powers.Approximately six years prior to the start of the series (in late 2004/early 2005), Peter was among the roughly eleven people inside the Hale House when Kate Argent set fire to it. Though the fire killed nearly everyone inside, Peter and Cora were among the only two people at the house at the time of the fire to survive (excluding Derek and Laura, who were at school when it happened). Unfortunately for Peter, he sustained severe burns to at least 75% of his body and was subsequently hospitalized in a long-term care facility to recover alone in a coma while Derek and Laura, not realizing he survived, fled to New York to hide from the hunters For the next six years, Peter was cognizant but locked inside his body while it slowly healed his burns, the experience driving him insane."
	},
	
{ 
	name : "Mr. Argent", 
	image : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR9mRufhy93h2NySjf823zfHJYhkyvRhIQm1g&usqp=CAU",
	description : "David J. R. Bourne is a Canadian actor best known for his roles as Kenny Ryan in ABC's Revenge, Isaac in The CW's The Secret Circle, and Sam in Bravo!'s Godiva's. In Teen Wolf, J.R. portrays Chris Argent, a veteran Werewolf Hunter who, due to the influence of his daughter Allison Argent and her then-boyfriend Scott McCall, has changed his ways since his introduction into the series and is now a protector of innocent humans and supernatural creatures alike."
	},
	{
		 name : "Clay Jensen",
		 image : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQXBaO8TPM9D1eXWHZhW8TnUPVOpOg2q2o5g&usqp=CAU",
		 description : "Clay wasa student at Liberty High School and a close friend of Hannah Baker; who was also his crush. He is the son of Lainie and Matt Jensen, Justin Foley's brother (through adoption), the ex-boyfriend of Skye Miller, theex-boyfriend of Ani Achola and the subject of the A side of the sixth tape on Hannah's tapes.The first season follows Clay during his time with Hannah while she was alive; in flashbacks and his time after her death, listening to Hannah's tapes, trying to piece together Hannah's story to find out what led her to suicide. At the end of his tape, Hannah explains that Clay's name didn't belong on the list, but that she felt he needed to know the reasons behind her ultimate decision.In the second season, Clay tries to cope with Hannah's death and hallucinations of her throughout his grieving process. His main goal is to get justice forHannah as the trial commences. He receives Polaroids that aid him in finding out the baseball varsity team's secret place that is connected to Hannah and many other girls at Liberty High.In the third season, Clay is the main suspect in the death of his classmate and enemy, Bryce Walker. Although he has a deep hatred for Bryce, he—along with new girl Ani Achola—plays detective in trying to figure out who killed Bryce. While the police have their eyes on him, the two uncover secrets of their friends and ultimately discover Bryce's killer."
	},
	{
		name : "Justin Foley", 
		image : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxC8mjAqEzTxbBNpriu8V1S3EMMLTkvlP06w&usqp=CAU",
		description : "Justin was the son of Amber Foley, the adoptive son of Matt Jensen and Lainie Jensen, the boyfriend of Jessica Davis and ex-boyfriend of Kat. He was a student at Liberty High School. He also appeared on two separate tapes, as the first and ninth reasons that Hannah Baker committed suicide.In the first season, as Clay Jensen listened to the tapes, he tried to keep Clay from revealing the truth to Jessica, even threatening him; Jessica was raped by Bryce Walker and Justin knew this but lied to Jessica telling her that he and Jessica had sex and she was just drunk. His relationship with Jessica was rocky from time to time. He constantly battled between his relationship with Jessica and his loyalty and friendship with Bryce. Justin became mad at Jessica for hanging out with Bryce and ultimately told her the truth and she cut ties with Bryce and broke up with Justin. Justin also cut ties with Bryce. Having no one to stay with or stick around for, he left town.In the second season, a trial between Hannah's parents and Liberty High began, Clay attempted to find Justin as he was the only one who could testify against Bryce in court; Jessica was reluctant to speak up about her rape as she was not yet ready. Clay found Justin homeless, and brought him back to his house, unknown to Clay's parents. Clay, Tony, and Sheri helped detox Justin. Justin later came back to Liberty High, but Jess wanted nothing to do with him. Clay and Justin started to form a brotherly relationship. He helpedClay and Sheri find the Polaroids. Jess and Justin slowly build back up their friendship and Justin testified against Bryce about Jessica's rape and got arrested for accessory to sexual assault as he didn't call the police or tell anyone. He was released to attend Hannah's wake and Clay told Justin that Clay's parents wanted to adopt him.In the third season, Justin was released from Juvie and lived permanently with Clay and his parents, he came back to Liberty High and was back on the football team. He helped Clay with helping Tyler Down recover after he attempted a school shooting. Justin found out Bryce was dead and became a suspect to Clay and Ani Achola (a new girl) in his murder. They believed that Justin had killed Bryce after Clay found drugs that were prescribed to Bryce. Justin revealed that Bryce had helped Justin out with dealing with Seth Massey. He and Bryce talked about Justin's drug addiction at Monet's, Bryce then gave Justin Bryce's own prescribed Oxycodone Hydrochloride—an opioid medication used for treatment of moderate to severepain—to help Justin stay away from heroin and have more control over his addiction."
	},
	{
		name : "Ana Steele",
		image : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS1qbbP5q_L1HdpclHY0c56VT_XSiTt3lgkww&usqp=CAU", 
		description : "Ana's biological father, Franklin A. Lambert, died from an accident during Marine combat training the day after her birth. Her mother's second husband, Ray Steele, is the man who registered her and raised her as a daughter, which Ana considers her 'real' father. Ray taught Ana several practical skills, including self-defense, gun safety, and using tools. Ana lived with her mother, Carla Wilks, in Las Vegas during her mother's thirdmarriage to Stephen Morton. Ana eventually moved back to Montesano, WA to live with her stepfather Ray, on account of not getting along well with her mother's third husband. She had some an irk feeling for her mother who she described as 'incurably romantic' and in fact her mother is on husband number four. Ana doesn't want to interfare much about her mother married life.At the start of the trilogy, Ana is a senior at Washington State University Vancouver, majoring in English Literature. She likes to spend time alone with books. She lives with her best friend, Kate Kavanagh, who is completely opposite of her.She starts a relationships with Christian Grey after she replaced Kate Kavanagh's interview for the WSU student newspaper. At first she were overwhelmed with the BDSM life Christian's introduced, and then she decides to give it a try. But, eventually before even signing the contract, she decides to end her relationship with Christian because she can't give submission and obedience while she wants romance and flowers between their relationship. After a week separated, Christian approches Ana again and he want to start over the relationship with no punishments, rules, or secrets attached.After she married Christian, she changed her name to 'Anastasia RoseGrey'. She run a business 'Grey Publishing' (formerly known as SIP), and had a son named Theodore Raymond Grey and daughter named Phoebe Grey."
	},
	{
		name : "Jamie Dornan", 
		image : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxGgtKuXhGgnioYZIRx7x-kIvu2DJgVx5NsQ&usqp=CAU", 
		description : "Christian Trevelyan Grey is the male protagonist of the trilogy, Fifty Shades of Grey. To the outside world, he appears to be a handsome and attractive young man in the business world. However, he has a 'hidden life': heChristian was born in the city of Detroit. His biological mother, Ella, was addicted to drugs and worked as a prostitute. Her pimp was extremely abusive to both her and Christian, often beating Cristian with a belt, hitting and kicking him, or putting out his cigarettes on his skin, leaving terrible scars and burn marks. When he was four years old, his mother overdosed and died; he was alone with her corpse for four days before they were discovered by police.Christian continues to have nightmares of his childhood even well into adulthood, and often calls his biological mother 'the crack whore.' Dr. Grace Trevelyan Grey was the emergency room doctor on staff when the traumatized Christian was brought to the hospital by the police. She and her husband, Carrick Grey, adopted Christian into their family, but while they were waiting for the adoption paperwork to go through, he lived with a foster family for several months, which included a ten year old Jack Hyde.The Greys moved to Seattle at some point during Christian's childhood, and Mia Grey was adopted shortly thereafter. This was a turning point for Christian: until Mia, Christian did not speak, and was wary of his adoptive older brother Elliot Grey."
	},
	{
		name : "Jack Hyde", 
		image : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJta-u9KhKOkqEH-x1jqNY1XuJptjnqrxXrw&usqp=CAU", 
		description : "Jack Hyde first appears in Fifty Shades Darker as an editor for a publishing company called Seattle Independent Publishing (SIP). He interviews Anastasia Steele (the protagonist) and hires her as his personal assistant. He then starts behaving quite inappropriately towards her, such as constantly asking her out and calling her pet names (to be fair, she was rather unnerved by him to begin with). Eventually, Jack confronts Ana with her personal e-mails to Christian and forces her to have sex with him under threat of exposure. However, Ana is able to escape his clutches, and Christian (who had acquired SIP) has him fired. This causes Jack's resentment to grow enough to seek revenge on Christian. Christian soon discovers that Jack had been spying on him the entire time. Jack is spying on Christian's birthday party, and judging by Elena Lincoln's departure, he may have had a role in sabotaging the party."
	},
	{
		name : "Jackson", 
		image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTRO07ZcsyI6UnEnRPT9jKyY6qjWDjwtoGCrQ&usqp=CAU", 
		description: "Jackson Whittemore was a main character on Teen Wolf in Season 1 and Season 2. He is the biological son of the late Gordon and Margaret Miller, and the adopted son of David Whittemore and his unnamed wife. Jackson was first introduced as a cocky, self-absorbed jock who was best known for being Beacon Hills High School's star lacrosse player and the boyfriend of the most popular girl in school, Lydia Martin.However, after fellow student and lacrosse teammate Scott McCall started to overshadow him as the most talented player, Jackson became desperate to know what had enhanced Scott's athletic skills so that he could partake as well. Once he learned that Scott had been turned into a Werewolf, he began to blackmail him by threatening to out Scott to his then-girlfriend Allison Argent if he didn't help him get the bite and turn into a Werewolf as well. Whenthis plan failed to yield the desired results, Jackson turned to born-Werewolf Derek Hale for help instead. Though Derek initially rejected him, he ultimately relented, and after he became an Alpha, he gave Jackson the bite, making him Derek's first Beta, though Derek secretly hoped it would kill him due to the trouble he had caused.Unfortunately for both of them, Jackson's transformation didn't go as planned. Jackson immediately rejected Derek as his Alpha, claiming that he had his own agenda before he started leaking black fluid from his ears, nose, and mouth. In time, it was revealed that Jackson actually had been turned by thebite, but not into a Werewolf—instead, he had become a Kanima due to his unresolved issues regarding his identity as an orphan and adopted child. With this transformation, Jackson gained the ability to shapeshiftinto a reptilian, snake-like creature with claws, double-rows of sharp fang teeth, and a tail, and his claws and tail produced a clear venom that paralyzes any living creature upon contact."
	}
]
 
function seedDB(){
   //Remove all characters
   Character.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed characters!");
        Comment.remove({}, function(err) {
            if(err){
                console.log(err);
            }
            console.log("removed comments!");
             //add a few characters
            data.forEach(function(seed){
                Character.create(seed, function(err, character){
                    if(err){
                        console.log(err)
                    } else {
                        console.log("added a character");
                        //create a comment
                        Comment.create(
                            {
                                text: "This place is great, but I wish there was internet",
                                author: "Homer"
                            }, function(err, comment){
                                if(err){
                                    console.log(err);
                                } else {
                                    character.comments.push(comment);
                                    character.save();
                                    console.log("Created new comment");
                                }
                            });
                    }
                });
            });
        });
    }); 
    //add a few comments
}
 
module.exports = seedDB;