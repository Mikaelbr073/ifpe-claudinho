design, ele foi estruturado de forma técnica e prática.
Documento de Requisitos do Produto (PRD)
Produto: SisVagas UBS (Sistema de Gestão de Vagas e Agendamentos)
Status: Em Definição
Data: 23 de Maio de 2026
Líder de Produto: [Seu Nome]
1. Visão Geral do Produto
As Unidades Básicas de Saúde (UBS) enfrentam grandes desafios na distribuição e ocupação de vagas para consultas e exames. Filas físicas nas madrugadas, absenteísmo (pacientes que faltam e não avisam) e a falta de centralização na regulação de vagas geram ociosidade no sistema de saúde e insatisfação na população.
O SisVagas UBS é um sistema web destinado a centralizar, automatizar e otimizar a distribuição de vagas de atendimento (médicos gerais, especialistas, enfermeiros e exames), integrando o trabalho das equipes de recepção, regulação e os próprios cidadãos.
1.1 Objetivos de Negócio
•	Reduzir o tempo de espera do cidadão para agendamento de consultas em até 40%.
•	Reduzir a taxa de absenteísmo (faltas) em 30% por meio de lembretes automáticos.
•	Zerar a ociosidade de agendas médicas por falta de preenchimento de vagas remanescentes.
2. Personas (Públicos-Alvo)
	1.	Maria (Cidadã/Paciente): Usuária do SUS, prefere agendar de forma simples ou ir à UBS sabendo exatamente quando será atendida, sem precisar madrugar na fila.
	2.	Carlos (Recepcionista da UBS): Responsável por acolher os pacientes que vão presencialmente, checar documentos e realizar o agendamento manual no sistema para quem não tem acesso à tecnologia.
	3.	Dra. Ana (Médica/Profissional de Saúde): Precisa visualizar sua agenda do dia de forma clara, registrar os atendimentos e liberar novas vagas de retorno de forma ágil.
	4.	Roberto (Gestor de Saúde/Regulação): Precisa monitorar a oferta e a demanda de vagas de toda a região, remanejando recursos (ex: transferir vagas de uma UBS com menos demanda para outra sobrecarregada).
3. Requisitos Funcionais (Escopo do Produto)
O sistema será dividido em três módulos principais: Módulo Cidadão, Módulo Interno (UBS/Profissionais) e Módulo de Gestão/Regulação.
Módulo 1: Cidadão (Web/)
•	RF01 - Autenticação: O cidadão deve se logar utilizando o Gov.br ou o número do Cartão Nacional de Saúde (CNS).
•	RF02 - Visualização de Vagas: Exibir as vagas disponíveis para a UBS de referência do cidadão (baseado no CEP de cadastro).
•	RF03 - Solicitação de Agendamento: Permitir que o usuário reserve uma vaga para consultas de Atenção Básica (Clínico Geral, Pediatria, Ginecologia).
•	RF04 - Cancelamento de Vaga: O cidadão pode cancelar um agendamento com até 24h de antecedência.
•	RF05 - Notificações: Envio de alertas (WhatsApp/SMS e Push) confirmando o agendamento e lembrando o usuário 48h e 24h antes da consulta.
Módulo 2: Recepção e Profissionais de Saúde (Desktop)
•	RF06 - Painel da Recepção: Permitir que o recepcionista busque pacientes por CPF/CNS e realize o agendamento manual (para casos presenciais ou telefônicos).
•	RF07 - Check-in/Acolhimento: Botão para registrar que o paciente chegou à UBS, mudando o status da vaga para "Em Espera".
•	RF08 - Agenda do Profissional: Dashboard para médicos e enfermeiros visualizarem a fila do dia, status de cada paciente (Aguardando, Em Atendimento, Atendido, Faltou).
•	RF09 - Bloqueio de Agenda: Permitir que a administração bloqueie horários ou dias específicos (ex: recessos, reuniões de equipe).
Módulo 3: Gestão e Regulação (Dashboard Administrativo)
•	RF10 - Cadastro de Grade de Vagas: Criação de matrizes de horários por profissional, especialidade e UBS.
•	RF11 - Lista de Espera Inteligente: Se uma consulta for cancelada, o sistema deve disparar automaticamente uma oferta de vaga via WhatsApp para o primeiro paciente da fila de espera daquela especialidade.
•	RF12 - Relatórios e Analytics: Exibição de gráficos de taxa de ocupação, índice de absenteísmo por especialidade e tempo médio de espera por atendimento.
4. Requisitos Não-Funcionais (Qualidade e Infraestrutura)
•	RNF01 - Segurança (LGPD): Todos os dados de saúde (prontuários, motivos de consulta) e dados pessoais devem ser criptografados em repouso e em trânsito (HTTPS, AES-256), seguindo estritamente a Lei Geral de Proteção de Dados.
•	RNF02 - Disponibilidade: O sistema deve estar disponível 99,9% do tempo (High Availability), considerando que o atendimento de saúde não pode parar.
•	RNF03 - Desempenho: O tempo de resposta para a busca de vagas disponíveis não deve ultrapassar 2 segundos, mesmo em horários de pico (ex: abertura de agendas no início do mês).
•	RNF04 - Acessibilidade: A interface do cidadão deve seguir as diretrizes do WCAG 2.1 (contraste de cores, leitura de tela para deficientes visuais).
•	RNF05 - Integração: O sistema deve ser capaz de se integrar via API com o barramento do e-SUS APS (Prontuário Eletrônico do Cidadão).
5. Critérios de Sucesso e Métricas (KPIs)
Para validar se o produto atingiu os objetivos propostos após o lançamento, acompanharemos:
•	Taxa de Ocupação das Vagas: Meta de > 95% das vagas ofertadas preenchidas.
•	Taxa de No-Show (Absenteísmo): Redução do índice atual (ex: de 25% para menos de 15%).
•	Tempo Médio para Agendamento: Redução do tempo entre a solicitação da vaga e a data da consulta.
•	NPS (Net Promoter Score): Satisfação do cidadão e dos profissionais de saúde com a usabilidade da ferramenta (Meta: NPS > 70).
6. Riscos e Mitigações
Risco	Impacto	Mitigação
Pacientes idosos ou sem acesso à internet não conseguirem usar o sistema.	Alto	Manter uma cota de vagas (ex: 30%) exclusiva para agendamento presencial/telefônico via recepção.
Médicos faltarem ou entrarem de licença médica de última hora.	Médio	Criar funcionalidade de "Disparo de Cancelamento em Massa" com reagendamento prioritário automático para os afetados.
Instabilidade na API de integração com o e-SUS.	Alto	Desenvolver uma fila de sincronização assíncrona (Offline-First para o módulo interno), garantindo que os dados locais sejam salvos e sincronizados assim que a API retornar.
7. Próximos Passos e Cronograma Estimado
	1.	Design & UX (Fase Atual): Desenho dos wireframes e fluxos de telas para validação com recepcionistas e médicos. (2 semanas)
	2.	Desenvolvimento do MVP (Mínimo Produto Viável): Foco nos módulos de agendamento básico (Clínico Geral) e painel da recepção. (8 semanas)
	3.	Projeto Piloto: Implementação em apenas 1 UBS selecionada para testes reais e coleta de feedbacks. (4 semanas)
	4.	Rollout Geral: Correção de bugs do piloto e lançamento para as demais unidades da rede.