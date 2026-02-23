import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, XCircle, ChevronRight, RotateCcw, BookOpen, Award, AlertCircle, GraduationCap } from 'lucide-react';
import { questions } from './data/questions';

export default function App() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const q = questions[currentIdx];

  const handleSelect = (option: string) => {
    if (submitted) return;
    setSelected(option);
  };

  const handleSubmit = () => {
    if (!selected) return;
    setSubmitted(true);
    if (selected === q.correctAnswer) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(i => i + 1);
      setSelected(null);
      setSubmitted(false);
    } else {
      setFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelected(null);
    setSubmitted(false);
    setScore(0);
    setFinished(false);
  };

  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case '初级': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case '中级': return 'bg-amber-100 text-amber-700 border-amber-200';
      case '高级': return 'bg-rose-100 text-rose-700 border-rose-200';
      default: return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  if (finished) {
    const percentage = Math.round((score / questions.length) * 100);
    let message = "";
    if (percentage >= 90) message = "太棒了！你的语法基础非常扎实！";
    else if (percentage >= 60) message = "不错哦！继续保持，复习一下错题会更好。";
    else message = "不要灰心，语法需要多练多看，你可以的！";

    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans text-slate-900">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl shadow-xl p-8 max-w-md w-full text-center border border-slate-100"
        >
          <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Award className="w-12 h-12 text-indigo-600" />
          </div>
          <h2 className="text-3xl font-bold mb-2">练习完成</h2>
          <p className="text-slate-500 mb-8">本次语法专项训练结果</p>
          
          <div className="text-6xl font-black text-indigo-600 mb-4">
            {score}<span className="text-3xl text-slate-400 font-medium">/{questions.length}</span>
          </div>
          
          <p className="text-lg font-medium text-slate-700 mb-8">{message}</p>
          
          <div className="bg-slate-50 rounded-2xl p-4 mb-8 text-left">
            <h4 className="font-semibold flex items-center gap-2 mb-2">
              <BookOpen className="w-4 h-4 text-indigo-500" />
              复习建议
            </h4>
            <ul className="text-sm text-slate-600 space-y-2">
              <li>• 重点回顾<strong>非谓语动词</strong>和<strong>从句</strong>的用法。</li>
              <li>• 建议将错题整理到错题本，定期复习。</li>
              <li>• 多阅读英语原版文章，培养语感。</li>
            </ul>
          </div>

          <button 
            onClick={handleRestart}
            className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold text-lg transition-colors flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-5 h-5" />
            再练一次
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center py-12 px-4 font-sans text-slate-900">
      <div className="max-w-3xl w-full">
        {/* Header */}
        <header className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-md">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-slate-800 tracking-tight">语法强化训练</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sm font-medium text-slate-500">
              进度: <span className="text-indigo-600 font-bold">{currentIdx + 1}</span> / {questions.length}
            </div>
            <div className="w-32 h-2 bg-slate-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-indigo-600 transition-all duration-500 ease-out"
                style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>
        </header>

        {/* Main Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIdx}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 md:p-10"
          >
            {/* Tags */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getDifficultyColor(q.difficulty)}`}>
                {q.difficulty}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-100">
                {q.category}
              </span>
            </div>

            {/* Sentence */}
            <div className="text-2xl md:text-3xl font-medium leading-relaxed text-slate-800 mb-12">
              {q.sentenceParts[0]}
              <span className={`inline-block min-w-[120px] border-b-4 px-4 pb-1 text-center mx-2 transition-all duration-300 ${
                !selected ? 'border-slate-300 text-slate-400' : 
                submitted ? (selected === q.correctAnswer ? 'border-emerald-500 text-emerald-600' : 'border-rose-500 text-rose-600') 
                : 'border-indigo-500 text-indigo-600'
              }`}>
                {selected || '______'}
              </span>
              {q.sentenceParts[1]}
            </div>

            {/* Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {q.options.map((option) => {
                const isSelected = selected === option;
                const isCorrect = option === q.correctAnswer;
                
                let buttonClass = "p-4 rounded-2xl border-2 text-lg font-medium transition-all duration-200 flex items-center justify-between ";
                
                if (!submitted) {
                  buttonClass += isSelected 
                    ? "border-indigo-600 bg-indigo-50 text-indigo-700 shadow-sm" 
                    : "border-slate-200 bg-white text-slate-700 hover:border-indigo-300 hover:bg-slate-50";
                } else {
                  if (isCorrect) {
                    buttonClass += "border-emerald-500 bg-emerald-50 text-emerald-700 shadow-sm";
                  } else if (isSelected && !isCorrect) {
                    buttonClass += "border-rose-500 bg-rose-50 text-rose-700 shadow-sm";
                  } else {
                    buttonClass += "border-slate-200 bg-slate-50 text-slate-400 opacity-60";
                  }
                }

                return (
                  <button
                    key={option}
                    onClick={() => handleSelect(option)}
                    disabled={submitted}
                    className={buttonClass}
                  >
                    <span>{option}</span>
                    {submitted && isCorrect && <CheckCircle2 className="w-6 h-6 text-emerald-500" />}
                    {submitted && isSelected && !isCorrect && <XCircle className="w-6 h-6 text-rose-500" />}
                  </button>
                );
              })}
            </div>

            {/* Actions */}
            <div className="flex justify-end">
              {!submitted ? (
                <button
                  onClick={handleSubmit}
                  disabled={!selected}
                  className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all ${
                    selected 
                      ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5' 
                      : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  提交答案
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold text-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all flex items-center gap-2"
                >
                  {currentIdx < questions.length - 1 ? '下一题' : '查看结果'}
                  <ChevronRight className="w-5 h-5" />
                </button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Feedback Card */}
        <AnimatePresence>
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -20, height: 0 }}
              className="mt-6 overflow-hidden"
            >
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 relative overflow-hidden">
                <div className={`absolute top-0 left-0 w-2 h-full ${selected === q.correctAnswer ? 'bg-emerald-500' : 'bg-rose-500'}`} />
                
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 rounded-lg ${selected === q.correctAnswer ? 'bg-emerald-100' : 'bg-rose-100'}`}>
                    {selected === q.correctAnswer ? (
                      <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                    ) : (
                      <AlertCircle className="w-6 h-6 text-rose-600" />
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">
                    {selected === q.correctAnswer ? '回答正确！' : '回答错误'}
                  </h3>
                </div>

                <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
                  <div>
                    <span className="font-semibold text-slate-900 bg-indigo-100 px-2 py-1 rounded text-sm mr-3">语法规则</span>
                    {q.explanation.rule}
                  </div>
                  
                  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                    <span className="font-semibold text-slate-900 bg-slate-200 px-2 py-1 rounded text-sm mr-3">例句</span>
                    <span className="italic text-slate-600">{q.explanation.example}</span>
                  </div>
                  
                  <div>
                    <span className="font-semibold text-slate-900 bg-rose-100 px-2 py-1 rounded text-sm mr-3">易错辨析</span>
                    {q.explanation.analysis}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
