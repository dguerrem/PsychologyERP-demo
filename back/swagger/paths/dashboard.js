const dashboardPaths = {
  "/api/dashboard/kpis": {
    get: {
      tags: ["Dashboard"],
      summary: "Obtener datos completos del dashboard",
      description: "Obtiene todos los datos necesarios para el dashboard incluyendo: 1) RapidKPIData: KPIs rápidos (sesiones, ingresos, pacientes, citas), 2) AgeDistributionData: distribución de pacientes activos por rangos de edad (18-25, 26-35, 36-45, >45), 3) DistributionByModalityData: distribución de sesiones por modalidad (presencial/online) con conteo, 4) MonthlyRevenueData: ingresos por mes para gráfico de líneas de los últimos 12 meses, 5) PaymentMethodsData: distribución porcentual de métodos de pago (efectivo, tarjeta, transferencia, seguro), 6) SessionsByClinicData: sesiones agrupadas por clínica para gráfico circular con filtros por año, 7) WeeklySessionsData: sesiones por semana del mes actual para gráfico de barras",
      responses: {
        200: {
          description: "Datos del dashboard obtenidos exitosamente",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/DashboardKPIsResponse",
              },
            },
          },
        },
        500: {
          description: "Error interno del servidor",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ErrorResponse",
              },
            },
          },
        },
      },
    },
  },
};

module.exports = dashboardPaths;