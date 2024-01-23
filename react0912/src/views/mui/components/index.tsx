import { Button, Card, CardContent, TextField, Typography } from '@mui/material'
import React from 'react'

export default function Index() {
  return (
    <>
      {/* 버튼 */}
      <Button variant='contained'>Default</Button>
      <Button variant='contained' color='primary'>Default</Button>
      {/* 비활성화 버튼 */}
      <Button variant='contained' disabled>Default</Button>
      {/* 링크 버튼 */}
      <Button variant='contained' href='#text-buttons'>Link</Button>

      <hr />

      {/* 
        텍스트 필드
        : 사용자로부터 입력을 받기 위한 요소
       */}
      <TextField 
        label='Standard'
        variant='standard'
      />
      <TextField 
        label='Multiline'
        multiline
        rows={4}
        defaultValue= 'Default Value'
      />
      <TextField 
        label='Password'
        type='password'
      />

      <hr />

      {/* 카드: 정보를 보여주는 컨테이너 */}
      <Card variant='outlined'>
        <CardContent>
          <Typography 
            variant='h5'
            component='h2'
          >
            Card Title
          </Typography>
          <Typography
            variant='body2'
            component='p'
          >
            Card content
          </Typography>
        </CardContent>
      </Card>
    </>
  )
}
