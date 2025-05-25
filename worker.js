addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // CORS başlıklarını ayarla
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, HEAD, POST, OPTIONS',
    'Access-Control-Allow-Headers': '*'
  }

  // OPTIONS isteklerini handle et
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      headers: corsHeaders
    })
  }

  try {
    // URL'den hedef endpoint'i al
    const url = new URL(request.url)
    let targetUrl = url.pathname.replace('/api/', '')
    const searchParams = url.search

    // Eğer mağaza bilgisi isteği ise
    if (targetUrl.includes('discovery-sellerstore-webgw-service')) {
      targetUrl = targetUrl.replace('discovery-sellerstore-webgw-service/v1/seller-store/header', '')
      return await fetch(`https://apigw.trendyol.com/discovery-sellerstore-webgw-service/v1/seller-store/header${searchParams}`, {
        method: request.method,
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
          'Accept-Language': 'tr-TR,tr;q=0.8,en-US;q=0.5,en;q=0.3',
        }
      })
    }
    
    // Normal ürün detay isteği
    const response = await fetch(`https://www.trendyol.com/${targetUrl}${searchParams}`, {
      method: request.method,
      headers: {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
        'Accept-Language': 'tr-TR,tr;q=0.8,en-US;q=0.5,en;q=0.3',
      }
    })

    // Yanıtı oluştur
    const modifiedResponse = new Response(response.body, response)

    // CORS başlıklarını ekle
    Object.entries(corsHeaders).forEach(([key, value]) => {
      modifiedResponse.headers.set(key, value)
    })

    return modifiedResponse
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        ...corsHeaders
      }
    })
  }
} 