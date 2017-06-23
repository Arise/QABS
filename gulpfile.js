const gulp = require('gulp');
const concat = require('gulp-concat');

const files = [
  './src/Header1.js',
  './src/Header2.js',
  './src/QABSManager.js',
  './src/Skill_Sequencer.js',
  './src/Game_Interpreter.js',
  './src/Game_System.js',
  './src/Game_Map.js',
  './src/Game_Action.js',
  './src/Game_BattlerBase.js',
  './src/Game_Battler.js',
  './src/Game_Actor.js',
  './src/Game_Enemy.js',
  './src/Game_CharacterBase.js',
  './src/Game_Player.js',
  './src/Game_Event.js',
  './src/Game_Loot.js',
  './src/Scene_Map.js',
  './src/Sprite_Character.js',
  './src/Sprite_Icon.js',
  './src/Sprite_SkillCollider.js',
  './src/Spriteset_Map.js'
]

gulp.task('default', ['build']);

gulp.task('build', function() {
  return gulp.src(files)
    .pipe(concat('QABS.js'))
    .pipe(gulp.dest('dist'));
});
