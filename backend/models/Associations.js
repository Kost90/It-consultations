const Users = require('./Users');
const Questions = require('./Questions');
const answers = require('./Answers');

Users.hasMany(Questions,{
    foreignKey:'UsersID',
    as: 'question',
    onDelete: 'CASCADE',
  });
  Questions.belongsTo(Users,{
    foreignKey:'UsersID',
  });

Questions.hasMany(answers,{
    foreignKey:'QuestionID',
    as: 'answers',
    onDelete: 'CASCADE',
});
answers.belongsTo(Questions,{
    foreignKey:'QuestionID',
});

module.exports = {
    Users,
    Questions,
    answers,
}