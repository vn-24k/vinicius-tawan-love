import React, { useState, useEffect } from 'react';
import { Clock, Sun, Moon, Cloud, CloudRain, Wind, Droplets, MapPin, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface WeatherData {
  temp: number;
  humidity: number;
  windSpeed: number;
  condition: string;
  isDay: boolean;
  code: number;
}

export const DualClockWeather: React.FC = () => {
  const { lang, t } = useLanguage();

  const [spTime, setSpTime] = useState<{ time: string; seconds: string; date: string; hour: number }>({
    time: '--:--',
    seconds: '--',
    date: 'Carregando...',
    hour: 12
  });

  const [bkkTime, setBkkTime] = useState<{ time: string; seconds: string; date: string; hour: number }>({
    time: '--:--',
    seconds: '--',
    date: 'Carregando...',
    hour: 22
  });

  const [spWeather, setSpWeather] = useState<WeatherData>({
    temp: 24,
    humidity: 68,
    windSpeed: 14,
    condition: 'Tarde Suave',
    isDay: true,
    code: 1
  });

  const [bkkWeather, setBkkWeather] = useState<WeatherData>({
    temp: 29,
    humidity: 78,
    windSpeed: 9,
    condition: 'Noite Tropical Quente',
    isDay: false,
    code: 1
  });

  // WMO Weather code interpreter supporting PT and TH
  const parseWmo = (code: number, isDay: boolean, currentLang: 'pt' | 'th'): string => {
    if (currentLang === 'th') {
      switch (code) {
        case 0:
          return isDay ? 'ท้องฟ้าแจ่มใส แดดอบอุ่น' : 'ท้องฟ้าโปร่ง ดาวพร่างพราย';
        case 1:
        case 2:
          return isDay ? 'มีเมฆบางส่วน แดดอ่อน' : 'ท้องฟ้ามีเมฆโปร่งสบาย';
        case 3:
          return 'เมฆครึ้มสบายตา';
        case 45:
        case 48:
          return 'มีหมอกบางยามเช้า';
        case 51:
        case 53:
        case 55:
          return 'ฝนพรำเย็นฉ่ำ';
        case 61:
        case 63:
        case 65:
          return 'ฝนตกชุ่มฉ่ำแบบเมืองร้อน';
        case 80:
        case 81:
        case 82:
          return 'ฝนซู่ช่วงบ่าย';
        case 95:
        case 96:
        case 99:
          return 'พายุฝนฟ้าคะนอง';
        default:
          return isDay ? 'อากาศรื่นรมย์' : 'ค่ำคืนอันเงียบสงบ';
      }
    }

    switch (code) {
      case 0:
        return isDay ? 'Céu Aberto e Ensolarado' : 'Noite Estrelada e Limpa';
      case 1:
      case 2:
        return isDay ? 'Parcialmente Ensolarado' : 'Céu com Nuvens Suaves';
      case 3:
        return 'Céu Nublado';
      case 45:
      case 48:
        return 'Névoa Úmida';
      case 51:
      case 53:
      case 55:
        return 'Garoa Típica';
      case 61:
      case 63:
      case 65:
        return 'Chuva Tropical Aconchegante';
      case 80:
      case 81:
      case 82:
        return 'Pancadas Rápidas de Verão';
      case 95:
      case 96:
      case 99:
        return 'Trovoadas Tropicais';
      default:
        return isDay ? 'Clima Agradável' : 'Noite Amistosa';
    }
  };

  // Live clocks ticker with locale awareness
  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();
      const locale = lang === 'th' ? 'th-TH' : 'pt-BR';

      // São Paulo (America/Sao_Paulo, UTC-3)
      const spFormatter = new Intl.DateTimeFormat(locale, {
        timeZone: 'America/Sao_Paulo',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      });
      const spSecFormatter = new Intl.DateTimeFormat(locale, {
        timeZone: 'America/Sao_Paulo',
        second: '2-digit'
      });
      const spDateFormatter = new Intl.DateTimeFormat(locale, {
        timeZone: 'America/Sao_Paulo',
        weekday: 'short',
        day: 'numeric',
        month: 'short'
      });
      const spHourFormatter = new Intl.DateTimeFormat('pt-BR', {
        timeZone: 'America/Sao_Paulo',
        hour: 'numeric',
        hour12: false
      });

      // Bangkok (Asia/Bangkok, UTC+7)
      const bkkFormatter = new Intl.DateTimeFormat(locale, {
        timeZone: 'Asia/Bangkok',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      });
      const bkkSecFormatter = new Intl.DateTimeFormat(locale, {
        timeZone: 'Asia/Bangkok',
        second: '2-digit'
      });
      const bkkDateFormatter = new Intl.DateTimeFormat(locale, {
        timeZone: 'Asia/Bangkok',
        weekday: 'short',
        day: 'numeric',
        month: 'short'
      });
      const bkkHourFormatter = new Intl.DateTimeFormat('pt-BR', {
        timeZone: 'Asia/Bangkok',
        hour: 'numeric',
        hour12: false
      });

      setSpTime({
        time: spFormatter.format(now),
        seconds: spSecFormatter.format(now),
        date: spDateFormatter.format(now),
        hour: parseInt(spHourFormatter.format(now), 10)
      });

      setBkkTime({
        time: bkkFormatter.format(now),
        seconds: bkkSecFormatter.format(now),
        date: bkkDateFormatter.format(now),
        hour: parseInt(bkkHourFormatter.format(now), 10)
      });
    };

    updateClocks();
    const clockInterval = setInterval(updateClocks, 1000);
    return () => clearInterval(clockInterval);
  }, [lang]);

  // Fetch live weather data from Open-Meteo
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // SP
        const spRes = await fetch(
          'https://api.open-meteo.com/v1/forecast?latitude=-23.5505&longitude=-46.6333&current=temperature_2m,relative_humidity_2m,is_day,weather_code,wind_speed_10m'
        );
        if (spRes.ok) {
          const spData = await spRes.json();
          const current = spData.current;
          setSpWeather({
            temp: Math.round(current.temperature_2m),
            humidity: current.relative_humidity_2m,
            windSpeed: Math.round(current.wind_speed_10m),
            condition: parseWmo(current.weather_code, current.is_day === 1, lang),
            isDay: current.is_day === 1,
            code: current.weather_code
          });
        }

        // Bangkok
        const bkkRes = await fetch(
          'https://api.open-meteo.com/v1/forecast?latitude=13.7563&longitude=100.5018&current=temperature_2m,relative_humidity_2m,is_day,weather_code,wind_speed_10m'
        );
        if (bkkRes.ok) {
          const bkkData = await bkkRes.json();
          const current = bkkData.current;
          setBkkWeather({
            temp: Math.round(current.temperature_2m),
            humidity: current.relative_humidity_2m,
            windSpeed: Math.round(current.wind_speed_10m),
            condition: parseWmo(current.weather_code, current.is_day === 1, lang),
            isDay: current.is_day === 1,
            code: current.weather_code
          });
        }
      } catch (err) {
        console.warn('Weather fetch fallback active', err);
      }
    };

    fetchWeather();
    const weatherTimer = setInterval(fetchWeather, 600000);
    return () => clearInterval(weatherTimer);
  }, [lang]);

  const getWeatherIcon = (code: number, isDay: boolean) => {
    if (code >= 51 && code <= 82) return <CloudRain className="w-5 h-5 text-sky-400 animate-bounce" />;
    if (code >= 1 && code <= 3) return <Cloud className="w-5 h-5 text-slate-300" />;
    return isDay ? (
      <Sun className="w-5 h-5 text-amber-400 animate-spin" style={{ animationDuration: '24s' }} />
    ) : (
      <Moon className="w-5 h-5 text-indigo-300" />
    );
  };

  return (
    <div className="w-full">
      {/* Cards de Fuso Horário & Clima */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
        {/* Card 1: São Paulo (Vinicius) */}
        <div className="relative overflow-hidden rounded-2xl bg-black/55 backdrop-blur-md border border-amber-500/35 hover:border-amber-400/70 p-5 lg:p-6 transition-all duration-300 group shadow-xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-amber-500/20 transition-all duration-500" />

          {/* Header do Card */}
          <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
            <div className="flex items-center space-x-2">
              <span className="text-xl">🇧🇷</span>
              <div>
                <h4 className="text-sm font-semibold tracking-wide text-white flex items-center gap-1.5">
                  {lang === 'th' ? 'เซาเปาโล, บราซิล' : 'São Paulo, Brasil'}
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                </h4>
                <p className="text-[11px] font-mono text-amber-400/90 tracking-wider">
                  {t.clocks.spHome}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1 text-[11px] font-mono bg-white/5 px-2.5 py-1 rounded-full text-slate-300 border border-white/5">
              <MapPin className="w-3 h-3 text-amber-400" />
              <span>23.55° S, 46.63° W</span>
            </div>
          </div>

          {/* Time & Weather Display */}
          <div className="flex items-baseline justify-between mb-4">
            <div>
              <div className="flex items-baseline space-x-1 font-mono">
                <span className="text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
                  {spTime.time}
                </span>
                <span className="text-lg lg:text-xl text-amber-400/90 font-mono font-medium">
                  :{spTime.seconds}
                </span>
              </div>
              <p className="text-xs text-slate-400 capitalize mt-1 font-sans">
                {spTime.date}
              </p>
            </div>

            {/* Weather Box */}
            <div className="text-right">
              <div className="flex items-center justify-end space-x-2">
                {getWeatherIcon(spWeather.code, spWeather.isDay)}
                <span className="text-2xl lg:text-3xl font-semibold text-white font-mono">
                  {spWeather.temp}°C
                </span>
              </div>
              <p className="text-xs text-slate-300 font-sans mt-0.5 max-w-[160px] truncate">
                {spWeather.condition}
              </p>
            </div>
          </div>

          {/* Micro Telemetry Bar */}
          <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400 font-mono">
            <div className="flex items-center gap-1">
              <Droplets className="w-3 h-3 text-sky-400" />
              <span>{t.clocks.humidity}: {spWeather.humidity}%</span>
            </div>
            <div className="flex items-center gap-1">
              <Wind className="w-3 h-3 text-slate-400" />
              <span>{t.clocks.wind}: {spWeather.windSpeed} km/h</span>
            </div>
            <div className="flex items-center gap-1 text-amber-400/80">
              {spWeather.isDay ? t.clocks.dayAlive : t.clocks.nightGentle}
            </div>
          </div>
        </div>

        {/* Card 2: Bangkok (Tawan) */}
        <div className="relative overflow-hidden rounded-2xl bg-black/55 backdrop-blur-md border border-[#d4a359]/40 hover:border-[#d4a359] p-5 lg:p-6 transition-all duration-300 group shadow-xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4a359]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#d4a359]/20 transition-all duration-500" />

          {/* Header do Card */}
          <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
            <div className="flex items-center space-x-2">
              <span className="text-xl">🇹🇭</span>
              <div>
                <h4 className="text-sm font-semibold tracking-wide text-white flex items-center gap-1.5">
                  {lang === 'th' ? 'กรุงเทพมหานคร, ประเทศไทย' : 'Bangkok, Tailândia'}
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#E5B869] animate-pulse" />
                </h4>
                <p className="text-[11px] font-mono text-[#E5B869]/90 tracking-wider">
                  {t.clocks.bkkHome}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1 text-[11px] font-mono bg-white/5 px-2.5 py-1 rounded-full text-slate-300 border border-white/5">
              <MapPin className="w-3 h-3 text-[#E5B869]" />
              <span>13.75° N, 100.50° E</span>
            </div>
          </div>

          {/* Time & Weather Display */}
          <div className="flex items-baseline justify-between mb-4">
            <div>
              <div className="flex items-baseline space-x-1 font-mono">
                <span className="text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
                  {bkkTime.time}
                </span>
                <span className="text-lg lg:text-xl text-[#E5B869]/90 font-mono font-medium">
                  :{bkkTime.seconds}
                </span>
              </div>
              <p className="text-xs text-slate-400 capitalize mt-1 font-sans">
                {bkkTime.date}
              </p>
            </div>

            {/* Weather Box */}
            <div className="text-right">
              <div className="flex items-center justify-end space-x-2">
                {getWeatherIcon(bkkWeather.code, bkkWeather.isDay)}
                <span className="text-2xl lg:text-3xl font-semibold text-white font-mono">
                  {bkkWeather.temp}°C
                </span>
              </div>
              <p className="text-xs text-slate-300 font-sans mt-0.5 max-w-[160px] truncate">
                {bkkWeather.condition}
              </p>
            </div>
          </div>

          {/* Micro Telemetry Bar */}
          <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400 font-mono">
            <div className="flex items-center gap-1">
              <Droplets className="w-3 h-3 text-sky-400" />
              <span>{t.clocks.humidity}: {bkkWeather.humidity}%</span>
            </div>
            <div className="flex items-center gap-1">
              <Wind className="w-3 h-3 text-slate-400" />
              <span>{t.clocks.wind}: {bkkWeather.windSpeed} km/h</span>
            </div>
            <div className="flex items-center gap-1 text-[#E5B869]/80">
              {bkkWeather.isDay ? t.clocks.dayGolden : t.clocks.nightLit}
            </div>
          </div>
        </div>
      </div>

      {/* Faixa Poética de Sincronia */}
      <div className="mt-4 p-3.5 rounded-xl bg-gradient-to-r from-rose-950/20 via-black to-[#E5B869]/15 border border-[#d4a359]/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-slate-300 font-mono">
          <Clock className="w-4 h-4 text-[#E5B869]" />
          <span>{t.clocks.timeDelta}</span>
        </div>
        <div className="flex items-center gap-2 text-slate-400 text-center sm:text-right">
          <Sparkles className="w-3.5 h-3.5 text-[#E5B869] animate-pulse" />
          <span>
            {spTime.hour >= 6 && spTime.hour < 18 ? t.clocks.poeticDay : t.clocks.poeticNight}
          </span>
        </div>
      </div>
    </div>
  );
};
