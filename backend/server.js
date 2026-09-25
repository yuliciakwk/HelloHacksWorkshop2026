const express = require('express')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 5001

app.use(cors())

// Example: GET http://localhost:5001/api/type/fire (or /api/type/10)
app.get('/api/type/:idOrName', async (req, res) => {
  const type = req.params.idOrName.trim().toLowerCase()

  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/type/${encodeURIComponent(type)}/`,
      { signal: AbortSignal.timeout(10000) },
    )

    if (!response.ok) {
      return res.status(response.status === 404 ? 404 : 502).json({
        error: response.status === 404 ? 'Pokémon type not found.' : 'PokéAPI request failed.',
      })
    }

    const data = await response.json()
    res.json({
      half_damage_to: data.damage_relations.half_damage_to.map((type) => type.name),
      double_damage_from: data.damage_relations.double_damage_from.map((type) => type.name),
    })
  } catch (error) {
    console.error('Failed to fetch Pokémon type:', error.message)
    res.status(502).json({ error: 'Unable to fetch Pokémon type from PokéAPI.' })
  }
})

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`)
})
