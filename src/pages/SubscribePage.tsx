import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check, X, Zap, Lock, Cloud, Smartphone, ArrowRight, Star, Users, TrendingUp } from 'lucide-react';
import { useAuthState } from '@/hooks/auth';
import { AuthDialog } from '@/components/AuthDialog';
const SubscribePage = () => {
  const navigate = useNavigate();
  const {
    isAuthenticated
  } = useAuthState();
  const [isAnnual, setIsAnnual] = useState(false);
  const [showAuthDialog, setShowAuthDialog] = useState(false);
  const [pendingPlanId, setPendingPlanId] = useState<string | null>(null);
  const plans = [{
    id: 'essencial',
    name: 'Essencial',
    description: 'Perfeito para começar',
    monthlyPrice: 49.90,
    annualPrice: 39.90,
    maxApps: 1,
    maxPdfs: 3,
    features: [{
      name: '1 aplicativo',
      included: true
    }, {
      name: 'Até 3 PDFs (1 principal + 2 bônus)',
      included: true
    }, {
      name: 'Suporte por email',
      included: true
    }, {
      name: 'Templates básicos',
      included: true
    }, {
      name: 'Domínio personalizado',
      included: false
    }, {
      name: 'Integrações avançadas',
      included: false
    }, {
      name: 'Templates premium',
      included: false
    }],
    highlight: false
  }, {
    id: 'profissional',
    name: 'Profissional',
    description: 'Para quem quer crescer',
    monthlyPrice: 97.90,
    annualPrice: 79.90,
    maxApps: 5,
    maxPdfs: 5,
    features: [{
      name: 'Até 5 aplicativos',
      included: true
    }, {
      name: 'Até 5 PDFs por app (1 principal + 4 bônus)',
      included: true
    }, {
      name: 'Suporte prioritário',
      included: true
    }, {
      name: 'Templates básicos e avançados',
      included: true
    }, {
      name: 'Domínio personalizado',
      included: true
    }, {
      name: 'Integrações avançadas',
      included: true
    }, {
      name: 'Templates premium',
      included: false
    }],
    highlight: true
  }, {
    id: 'empresarial',
    name: 'Empresarial',
    description: 'Solução completa',
    monthlyPrice: 197.90,
    annualPrice: 159.90,
    maxApps: 10,
    maxPdfs: 10,
    features: [{
      name: 'Até 10 aplicativos',
      included: true
    }, {
      name: 'Até 10 PDFs por app (1 principal + 9 bônus)',
      included: true
    }, {
      name: 'Suporte VIP 24/7',
      included: true
    }, {
      name: 'Todos os templates',
      included: true
    }, {
      name: 'Domínio personalizado',
      included: true
    }, {
      name: 'Integrações avançadas',
      included: true
    }, {
      name: 'Templates premium exclusivos',
      included: true
    }],
    highlight: false
  }];
  const getPrice = (plan: typeof plans[0]) => {
    const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
    return price.toLocaleString('pt-BR', {
      minimumFractionDigits: 2
    });
  };
  const handleSubscribe = (planId: string) => {
    if (!isAuthenticated) {
      setPendingPlanId(planId);
      setShowAuthDialog(true);
      return;
    }
    navigate(`/checkout?plan=${planId}&billing=${isAnnual ? 'annual' : 'monthly'}`);
  };
  const handleAuthSuccess = () => {
    setShowAuthDialog(false);
    if (pendingPlanId) {
      navigate(`/checkout?plan=${pendingPlanId}&billing=${isAnnual ? 'annual' : 'monthly'}`);
    }
  };
  return <div className="min-h-screen bg-app-bg">
      {/* First Section - Impactful Headline */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-app-surface to-background">
        <div className="absolute inset-0 bg-gradient-neon opacity-5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--neon-blue)/0.1),transparent_70%)]"></div>
        
        <div className="container mx-auto px-4 py-32 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-neon/10 border border-neon-blue/30 mb-8 backdrop-blur-sm">
              <Zap className="w-5 h-5 text-neon-blue" />
              <span className="text-sm font-semibold text-foreground">A Revolução Digital dos Seus Conteúdos</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-neon bg-clip-text text-transparent">
                Transforme PDFs em Apps
              </span>
              <br />
              <span className="text-foreground">em Minutos, Não em Meses</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Seus ebooks, cursos e materiais digitais merecem mais do que um simples PDF. 
              <span className="text-foreground font-medium"> Crie experiências mobile profissionais</span> que seus clientes vão amar, 
              sem precisar de desenvolvedores ou conhecimento técnico.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Button size="lg" className="bg-gradient-neon hover:opacity-90 text-white px-10 py-6 text-lg h-auto shadow-neon" onClick={() => window.scrollTo({
              top: document.getElementById('pricing')?.offsetTop || 800,
              behavior: 'smooth'
            })}>
                Ver Planos e Preços
                <ArrowRight className="w-6 h-6 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="px-10 py-6 text-lg h-auto border-app-border hover:border-neon-blue/50" onClick={() => navigate('/suporte')}>
                Falar com Especialista
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto pt-8 border-t border-app-border/50">
              <div>
                <div className="text-4xl font-bold bg-gradient-neon bg-clip-text text-transparent mb-2">3min</div>
                <p className="text-sm text-muted-foreground">Tempo médio para criar seu app</p>
              </div>
              <div>
                <div className="text-4xl font-bold bg-gradient-neon bg-clip-text text-transparent mb-2">0</div>
                <p className="text-sm text-muted-foreground">Linhas de código necessárias</p>
              </div>
              <div>
                <div className="text-4xl font-bold bg-gradient-neon bg-clip-text text-transparent mb-2">100%</div>
                <p className="text-sm text-muted-foreground">Controle do seu conteúdo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section - Light Tone with Relevant Info */}
      <section className="relative py-24 bg-app-surface/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Por que Produtores Digitais Escolhem o MigraBook?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Mais de 500 criadores já descobriram a forma mais simples de entregar valor aos seus alunos e clientes
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <Card className="p-8 border-app-border bg-background hover:border-neon-blue/30 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-gradient-neon/10 flex items-center justify-center mb-6">
                  <Smartphone className="w-7 h-7 text-neon-blue" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Experiência Mobile Premium</h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Seus clientes terão acesso ao conteúdo direto no celular, com uma interface profissional e intuitiva. 
                  Offline, notificações push e muito mais.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-neon-blue flex-shrink-0 mt-1" />
                    <span className="text-foreground">Funciona offline após o primeiro acesso</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-neon-blue flex-shrink-0 mt-1" />
                    <span className="text-foreground">Interface otimizada para mobile</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-neon-blue flex-shrink-0 mt-1" />
                    <span className="text-foreground">Carregamento ultra-rápido</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 border-app-border bg-background hover:border-neon-pink/30 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-gradient-neon/10 flex items-center justify-center mb-6">
                  <Zap className="w-7 h-7 text-neon-pink" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Simples Como Upload de PDF</h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Não precisa aprender programação, design ou contratar desenvolvedores. 
                  Faça upload do seu PDF, personalize e publique em minutos.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-neon-pink flex-shrink-0 mt-1" />
                    <span className="text-foreground">Arraste e solte seus arquivos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-neon-pink flex-shrink-0 mt-1" />
                    <span className="text-foreground">Personalize cores e identidade visual</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-neon-pink flex-shrink-0 mt-1" />
                    <span className="text-foreground">Publique com um clique</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 border-app-border bg-background hover:border-neon-blue/30 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-gradient-neon/10 flex items-center justify-center mb-6">
                  <Lock className="w-7 h-7 text-neon-blue" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Segurança e Controle Total</h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Seus conteúdos ficam protegidos e você mantém controle total sobre quem acessa. 
                  Integração com plataformas de pagamento e áreas de membros.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-neon-blue flex-shrink-0 mt-1" />
                    <span className="text-foreground">Criptografia de ponta a ponta</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-neon-blue flex-shrink-0 mt-1" />
                    <span className="text-foreground">Controle de acesso avançado</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-neon-blue flex-shrink-0 mt-1" />
                    <span className="text-foreground">Backup automático na nuvem</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 border-app-border bg-background hover:border-neon-pink/30 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-gradient-neon/10 flex items-center justify-center mb-6">
                  <TrendingUp className="w-7 h-7 text-neon-pink" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Aumente Suas Conversões</h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Apps profissionais aumentam o valor percebido do seu produto e melhoram a experiência do cliente, 
                  resultando em mais vendas e menos pedidos de reembolso.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-neon-pink flex-shrink-0 mt-1" />
                    <span className="text-foreground">Maior valor percebido</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-neon-pink flex-shrink-0 mt-1" />
                    <span className="text-foreground">Melhor experiência do cliente</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-neon-pink flex-shrink-0 mt-1" />
                    <span className="text-foreground">Menos reembolsos</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Third Section - Complementary */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-app-surface/50 to-background"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(var(--neon-blue)/0.08),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-foreground">Tudo que Você Precisa Para </span>
                <span className="bg-gradient-neon bg-clip-text text-amber-400">Vender Mais</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Ferramentas profissionais que vão colocar seu produto em outro patamar</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <div className="text-center p-8 rounded-2xl bg-app-surface/50 border border-app-border backdrop-blur-sm hover:border-neon-blue/50 transition-all">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-neon flex items-center justify-center shadow-neon">
                  <Cloud className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Domínio Personalizado</h3>
                <p className="text-muted-foreground">
                  Use seu próprio domínio para fortalecer sua marca e transmitir ainda mais profissionalismo
                </p>
              </div>

              <div className="text-center p-8 rounded-2xl bg-app-surface/50 border border-app-border backdrop-blur-sm hover:border-neon-pink/50 transition-all">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-neon flex items-center justify-center shadow-neon">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Integrações Poderosas</h3>
                <p className="text-muted-foreground">
                  Conecte com ActiveCampaign, Hotmart, Eduzz e outras plataformas para automatizar seu negócio
                </p>
              </div>

              <div className="text-center p-8 rounded-2xl bg-app-surface/50 border border-app-border backdrop-blur-sm hover:border-neon-blue/50 transition-all">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-neon flex items-center justify-center shadow-neon">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Templates Premium</h3>
                <p className="text-muted-foreground">
                  Escolha entre dezenas de layouts profissionais criados por designers especializados
                </p>
              </div>
            </div>

            <Card className="p-12 text-center bg-gradient-to-br from-app-surface to-app-surface-hover border-neon-blue/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-neon opacity-5"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-neon/10 border border-neon-blue/30 mb-6">
                  <Zap className="w-4 h-4 text-neon-blue" />
                  <span className="text-sm font-semibold text-foreground">Garantia de 7 Dias</span>
                </div>
                <h3 className="text-3xl font-bold mb-4 text-foreground">Risco Zero Para Você</h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                  Teste o MigraBook por 7 dias. Se não gostar, devolvemos 100% do seu dinheiro, sem perguntas. 
                  Simples assim.
                </p>
                <div className="flex items-center justify-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-neon-blue" />
                    <span className="text-foreground">Cancelamento fácil</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-neon-blue" />
                    <span className="text-foreground">Reembolso rápido</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-neon-blue" />
                    <span className="text-foreground">Suporte dedicado</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section id="pricing" className="container mx-auto px-4 pb-20 pt-12">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Escolha o Plano Ideal Para o Seu Negócio
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Comece hoje e veja seus apps online em minutos
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm ${!isAnnual ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
              Mensal
            </span>
            <button onClick={() => setIsAnnual(!isAnnual)} className={`relative w-14 h-7 rounded-full transition-colors ${isAnnual ? 'bg-gradient-neon' : 'bg-app-border'}`}>
              <span className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-white transition-transform ${isAnnual ? 'translate-x-7' : ''}`} />
            </button>
            <span className={`text-sm ${isAnnual ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
              Anual
            </span>
            {isAnnual && <span className="px-3 py-1 rounded-full bg-gradient-neon text-white text-xs font-medium">
                Economize 20%
              </span>}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {plans.map(plan => <Card key={plan.id} className={`relative p-8 transition-all duration-300 ${plan.highlight ? 'border-2 border-neon-blue shadow-neon scale-105' : 'border-app-border hover:border-neon-blue/50'}`}>
              {plan.highlight && <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-neon text-white text-sm font-medium">
                  Mais Popular
                </div>}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-4xl font-bold">R$ {getPrice(plan)}</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
                
                {isAnnual && <p className="text-xs text-muted-foreground">
                    Cobrado anualmente (R$ {(plan.annualPrice * 12).toFixed(2)})
                  </p>}
              </div>

              <Button onClick={() => handleSubscribe(plan.id)} className={`w-full mb-6 ${plan.highlight ? 'bg-gradient-neon hover:opacity-90' : 'bg-app-surface hover:bg-app-surface-hover border border-app-border'}`}>
                Assinar Agora
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>

              <div className="space-y-3">
                {plan.features.map((feature, index) => <div key={index} className="flex items-start gap-3">
                    {feature.included ? <Check className="w-5 h-5 text-neon-blue flex-shrink-0 mt-0.5" /> : <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />}
                    <span className={`text-sm ${feature.included ? 'text-foreground' : 'text-muted-foreground'}`}>
                      {feature.name}
                    </span>
                  </div>)}
              </div>
            </Card>)}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20 border-t border-app-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Por que escolher o MigraBook?
            </h2>
            <p className="text-lg text-muted-foreground">
              A solução completa para criar apps mobile profissionais
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-neon flex items-center justify-center">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Apps Nativos</h3>
              <p className="text-sm text-muted-foreground">
                Aplicativos otimizados para iOS e Android
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-neon flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Rápido e Fácil</h3>
              <p className="text-sm text-muted-foreground">
                Crie seu app em minutos, sem código
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-neon flex items-center justify-center">
                <Cloud className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Nuvem Segura</h3>
              <p className="text-sm text-muted-foreground">
                Seus dados protegidos com criptografia
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-neon flex items-center justify-center">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">100% Seguro</h3>
              <p className="text-sm text-muted-foreground">
                Pagamentos seguros e garantia total
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="container mx-auto px-4 py-20 border-t border-app-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Resultados comprovados
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center border-app-border">
              <Users className="w-12 h-12 mx-auto mb-4 text-neon-blue" />
              <div className="text-4xl font-bold mb-2 bg-gradient-neon bg-clip-text text-transparent bg-gray-100">
                500+
              </div>
              <p className="text-muted-foreground">Clientes satisfeitos</p>
            </Card>

            <Card className="p-8 text-center border-app-border">
              <Smartphone className="w-12 h-12 mx-auto mb-4 text-neon-pink" />
              <div className="text-4xl font-bold mb-2 bg-gradient-neon bg-clip-text text-transparent bg-gray-100">
                2.000+
              </div>
              <p className="text-muted-foreground">Apps criados</p>
            </Card>

            <Card className="p-8 text-center border-app-border">
              <Star className="w-12 h-12 mx-auto mb-4 text-neon-blue" />
              <div className="text-4xl font-bold mb-2 bg-gradient-neon bg-clip-text text-transparent bg-gray-100">
                4.9/5
              </div>
              <p className="text-muted-foreground">Avaliação média</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="container mx-auto px-4 py-20 border-t border-app-border">
        <Card className="max-w-4xl mx-auto p-12 text-center bg-gradient-to-br from-app-surface to-app-surface-hover border-app-border">
          <TrendingUp className="w-16 h-16 mx-auto mb-6 text-neon-blue" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para começar?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Junte-se a centenas de profissionais que já transformaram seus PDFs em apps de sucesso
          </p>
          <Button size="lg" className="bg-gradient-neon hover:opacity-90 text-white px-8" onClick={() => window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })}>
            Ver Planos
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </Card>
      </section>

      <AuthDialog open={showAuthDialog} onOpenChange={setShowAuthDialog} onSuccess={handleAuthSuccess} />
    </div>;
};
export default SubscribePage;