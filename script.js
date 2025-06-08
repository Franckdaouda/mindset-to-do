const blessings = [
// 🌸 Compliments sur sa beauté et son charme
  "🌸 Tu es bien plus que jolie, tu es rayonnante.",
  "🌸 Ton regard illumine chaque pièce où tu entres.",
  "🌸 Tu as un sourire capable de guérir les journées grises.",
  "🌸 Ta beauté est naturelle, vraie, irrésistible.",
  "🌸 Chaque courbe de ton corps raconte une poésie.",
  "🌸 Tu es magnifique, à l’extérieur comme à l’intérieur.",
  "🌸 Tu n’as pas besoin de miroir pour savoir que tu es belle.",
  "🌸 Ton charme est unique, inimitable.",
  "🌸 Ton élégance est une œuvre d’art.",
  "🌸 Tes gestes ont une grâce qui m’hypnotise.",
  "🌸 Tu es la définition même de la féminité.",
  "🌸 Ta présence est un cadeau.",
  "🌸 Tu rayonnes plus fort que mille soleils.",
  "🌸 Même la lune est jalouse de ta lumière.",
  "🌸 Tu es une poésie vivante.",
  "🌸 Ton corps est un temple sacré.",
  "🌸 Ton sourire est contagieux.",
  "🌸 Ta beauté me laisse sans voix.",
  "🌸 Chaque détail de toi est un chef-d'œuvre.",
  "🌸 Tu es naturellement sublime.",
  "🌸 Tu es plus belle que tu ne le crois.",
  "🌸 Chaque centimètre de toi est admirable.",
  "🌸 Ta démarche est une danse que j’adore observer.",
  "🌸 Tes yeux racontent des histoires de douceur.",
  "🌸 Même sans maquillage, tu es sublime.",
  "🌸 Ta beauté ne suit aucune norme, elle les redéfinit.",
  "🌸 Être à tes côtés me rappelle la beauté du monde.",
  "🌸 Tu es élégante même sans essayer.",
  "🌸 Ton rire est un élixir de bonheur.",
  "🌸 Tu es séduisante sans le vouloir, irrésistible.",
  "🌸 Ton aura est magnétique, on ne peut pas t’ignorer.",
  "🌸 Tes lèvres ont la douceur des plus beaux rêves.",
  "🌸 Tes cheveux sont une cascade de charme.",
  "🌸 Tu es belle sans effort, naturellement.",
  "🌸 Même la nature t’envie ta grâce.",
  "🌸 Tes mains ont la douceur des caresses d’ange.",
  "🌸 Ton rire pourrait faire fleurir les saisons.",
  "🌸 Tu es sublime, sans condition ni comparaison.",
  "🌸 La beauté que tu portes vient du cœur.",
  "🌸 Tu es un trésor rare, précieux et resplendissant.",
  "🌸 Ta féminité est une mélodie douce et puissante.",
  "🌸 Ton regard fait fondre les murs de mon cœur.",
  "🌸 Tu es l’incarnation de la tendresse et de la grâce.",
  "🌸 Quand tu entres, l’univers se calme.",
  "🌸 Chaque partie de toi est une bénédiction.",
  "🌸 Tu es l’équilibre parfait entre force et douceur.",
  "🌸 Tu transformes le quotidien en magie.",
  "🌸 Tu es l’exception à toutes les règles.",
  "🌸 Ta présence est apaisante comme une caresse d’été.",
  "🌸 Ta sensualité est un art à part entière.",
  "🌸 Tu es la plus belle pensée que j’ai jamais eue.",

  // 🌟 Affirmations de confiance et d’amour propre
  "🌟 Tu as de la valeur, infiniment.",
  "🌟 Tu es assez, telle que tu es.",
  "🌟 Tu mérites tout l’amour du monde.",
  "🌟 Tu es forte, douce et incroyable.",
  "🌟 Tu es une femme de lumière, ne l’oublie jamais.",
  "🌟 Tu es un miracle à part entière.",
  "🌟 Ton corps est parfait car il est tien.",
  "🌟 Il n’y a qu’une seule toi, et c’est une bénédiction.",
  "🌟 Tu es rare, précieuse et belle.",
  "🌟 Tu n’as rien à prouver, tu es déjà exceptionnelle.",
  "🌟 Tu inspires confiance et admiration.",
  "🌟 Tu es capable de tout accomplir.",
  "🌟 Tu es une source d’inspiration.",
  "🌟 Tu es bien plus forte que tu ne le crois.",
  "🌟 Chaque jour, tu deviens une meilleure version de toi-même.",
  "🌟 Tu es digne de respect et d’amour.",
  "🌟 Tu apportes tant de beauté dans ce monde.",
  "🌟 Ta voix mérite d’être entendue.",
  "🌟 Tu es une étoile dans la nuit.",
  "🌟 Tu mérites tout ce qu’il y a de bon.",
  "🌟 Tu es incroyable, même quand tu doutes.",
  "🌟 Tu es un exemple de courage et de beauté.",
  "🌟 Tu es exactement là où tu dois être.",
  "🌟 Tu brilles, même dans tes silences.",
  "🌟 Tu es précieuse pour ce monde.",
  "🌟 Tu es une force douce et lumineuse.",
  "🌟 Tu es une reine, même sans couronne.",
  "🌟 Tu mérites d’être célébrée chaque jour.",
  "🌟 Tu es un pilier de lumière dans ma vie.",
  "🌟 Tu es la preuve vivante que la beauté a une âme."
];
// script.js
// script.js
let index = 0;

function showNextBlessing() {
  const box = document.getElementById("blessingBox");

  if (index < blessings.length) {
    box.classList.remove("fade-in"); // Reset animation
    void box.offsetWidth; // Reflow hack to restart animation
    box.innerHTML = blessings[index];
    box.classList.add("fade-in");
    index++;
  } else {
    box.innerHTML = "Tu as vu les 100 bénédictions. Mais je pourrais t’en dire mille autres, mon amour 💖";
  }
}
