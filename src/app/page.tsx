"use client";

import { Clock, Heart, Award, CheckCircle, Star, Timer, Shield, Target } from "lucide-react";

export default function MetodoX() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-slate-800 py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-center bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            MÉTODO 10X
          </h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Você não consegue passar de{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              3 minutos
            </span>{" "}
            na hora H?
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Descubra como durar mais, controlar sua ejaculação e transformar sua vida sexual!
          </p>
          <div className="bg-gradient-to-r from-yellow-500 to-orange-600 p-6 rounded-2xl mb-8">
            <p className="text-lg md:text-xl text-slate-900 font-semibold">
              O Método 10X vai te ensinar 10 técnicas comprovadas para aumentar seu tempo, 
              prazer e fazer qualquer mulher dizer "Te amo" depois da cama!
            </p>
          </div>
        </div>
      </section>

      {/* Problema Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
            Você se identifica com isso?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-700/50 p-6 rounded-xl border border-red-500/30">
              <div className="text-red-400 mb-4">
                <Timer className="w-12 h-12 mx-auto" />
              </div>
              <p className="text-white text-center">
                Você sente vergonha ou frustração por não conseguir durar na hora H?
              </p>
            </div>
            <div className="bg-slate-700/50 p-6 rounded-xl border border-red-500/30">
              <div className="text-red-400 mb-4">
                <Shield className="w-12 h-12 mx-auto" />
              </div>
              <p className="text-white text-center">
                A ansiedade de desempenho te deixa travado na cama?
              </p>
            </div>
            <div className="bg-slate-700/50 p-6 rounded-xl border border-red-500/30">
              <div className="text-red-400 mb-4">
                <Target className="w-12 h-12 mx-auto" />
              </div>
              <p className="text-white text-center">
                Parece que toda relação termina rápido demais, e você não tem controle?
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <p className="text-xl text-gray-300 mb-4">
              Se você respondeu sim, você não está sozinho — milhões de homens sofrem com isso.
            </p>
            <p className="text-2xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              Mas a boa notícia é: isso tem solução!
            </p>
          </div>
        </div>
      </section>

      {/* Desejo Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Imagine chegar na cama e...
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-8 rounded-2xl border border-blue-500/30">
              <Clock className="w-16 h-16 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Controle Total</h3>
              <p className="text-gray-300">
                Durar o tempo que quiser sem medo de ejacular cedo.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-8 rounded-2xl border border-purple-500/30">
              <Award className="w-16 h-16 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Confiança Total</h3>
              <p className="text-gray-300">
                Ter confiança total em si mesmo e em seu desempenho.
              </p>
            </div>
            <div className="bg-gradient-to-br from-pink-600/20 to-red-600/20 p-8 rounded-2xl border border-pink-500/30">
              <Heart className="w-16 h-16 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Ela Vai Te Amar</h3>
              <p className="text-gray-300">
                Fazer sua parceira dizer "Te amo" com intensidade depois de cada relação.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-600/20 to-teal-600/20 p-8 rounded-2xl border border-green-500/30">
              <Star className="w-16 h-16 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Prazer Exponencial</h3>
              <p className="text-gray-300">
                Sentir o prazer aumentar exponencialmente para você e ela.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <p className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Tudo isso é possível com o Método 10X.
            </p>
          </div>
        </div>
      </section>

      {/* Solução Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            A Solução: Método 10X
          </h2>
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-8 rounded-2xl border border-blue-500/30 mb-8">
            <p className="text-xl text-white text-center mb-8">
              O Método 10X é um e-book digital completo, detalhado e passo a passo, que reúne:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <p className="text-gray-300">10 técnicas comprovadas para controlar a ejaculação precoce.</p>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <p className="text-gray-300">Exercícios físicos e de concentração que aumentam sua resistência.</p>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <p className="text-gray-300">Métodos psicológicos para reduzir ansiedade e aumentar prazer.</p>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <p className="text-gray-300">Estratégias práticas para usar medicação, preservativos e pomadas se necessário.</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-white">
              Com ele, você terá o controle total da sua performance sexual em{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                semanas
              </span>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Benefícios Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Benefícios do Método 10X
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Dure o tempo que quiser na cama",
              "Recupere sua confiança e autoestima",
              "Faça todas as mulheres dizerem 'Te amo'",
              "Controle a ansiedade e a performance sexual",
              "Técnicas fáceis e passo a passo",
              "Resultados rápidos e duradouros"
            ].map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-green-600/20 to-teal-600/20 p-6 rounded-xl border border-green-500/30">
                <CheckCircle className="w-8 h-8 text-green-400 mb-4" />
                <p className="text-white font-semibold">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Depoimentos de Homens Reais
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Rafael, 25 anos",
                text: "Eu não durava mais que 2 minutos… depois do Método 10X, agora minha namorada não para de elogiar!"
              },
              {
                name: "Lucas, 30 anos",
                text: "Apliquei as técnicas e em 3 semanas estava durando mais de 15 minutos, a diferença é absurda!"
              },
              {
                name: "Bruno, 35 anos",
                text: "Minha esposa voltou a me olhar com desejo… ela disse 'Te amo' depois de cada noite!"
              },
              {
                name: "Eduardo, 28 anos",
                text: "Senti um aumento de confiança enorme, minha ansiedade sumiu e meu prazer dobrou!"
              },
              {
                name: "Felipe, 40 anos",
                text: "Vale cada centavo, fiz a compra com desconto e nunca me arrependi. Resultado real!"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-slate-700/50 p-6 rounded-xl border border-yellow-500/30">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                <p className="text-yellow-400 font-semibold">– {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Urgência Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-red-600 to-red-800 p-8 rounded-2xl border-4 border-red-400 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              🔥 OFERTA LIMITADA! 🔥
            </h2>
            <div className="space-y-4 mb-8">
              <p className="text-xl text-white font-bold">
                Apenas 50 unidades disponíveis com 50% OFF – garanta já por R$37,90!
              </p>
              <p className="text-lg text-red-200">
                ⏰ O desconto termina em breve!
              </p>
              <p className="text-lg text-white font-semibold">
                💥 Não espere mais! Cada minuto que você adia é mais frustração e ansiedade.
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm text-red-200 line-through mb-2">De R$ 75,90</p>
              <p className="text-4xl font-bold text-yellow-400 mb-4">R$ 37,90</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto max-w-4xl text-center">
          <a 
            href="https://pay.kirvano.com/ecaca2f0-5970-4dbc-9b31-b598818c42f4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-slate-900 font-bold text-2xl md:text-3xl px-12 py-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 mb-8"
          >
            QUERO MEU MÉTODO 10X AGORA!
          </a>
          <div className="space-y-4">
            <p className="text-xl text-white font-semibold">
              Clique agora e transforme sua vida sexual!
            </p>
            <p className="text-lg text-blue-200">
              Resultados rápidos, simples de aplicar e 100% comprovados.
            </p>
          </div>
          <div className="mt-8 flex justify-center space-x-8">
            <div className="flex items-center space-x-2">
              <Shield className="w-6 h-6 text-green-400" />
              <span className="text-white">Seguro</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-6 h-6 text-green-400" />
              <span className="text-white">Acesso Imediato</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-6 h-6 text-green-400" />
              <span className="text-white">Garantido</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-gray-400 mb-4">
            © 2024 Método 10X. Todos os direitos reservados.
          </p>
          <p className="text-sm text-gray-500">
            Este produto é destinado apenas para maiores de 18 anos.
          </p>
        </div>
      </footer>
    </div>
  );
}