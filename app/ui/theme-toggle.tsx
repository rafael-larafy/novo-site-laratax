import{css} from 'remix/ui'

export function ThemeToggle() {
  return () => (
    <button type="button" data-theme-toggle="" aria-label="Alternar tema"
    mix={css({
      position: 'relative',
      width: '52px',
      height: '28px',
      background: 'var(--toggle-track)',
      border: '2px solid var(--toggle-track)',
      borderRadius: '999px',
      cursor: 'pointer',
      padding: '0',
      flexShrink: 0,
      transition: 'background 0.3s ease,  border-color 0.3s ease', '&:focus-visible': {outline: '2px solid var(--accent)',outlineOffset: '3px'},
      '&::before':{
        content:'""',
        position:'absolute',
        top:'3px',
        left:'3px',
        width:'18px',
        height:'18px',
        borderRadius:'50%',
        background:'#002E43',
        boxShadow: 'var(--toggle-knob-shadow)',
        transform:'translateX(var(--toggle-knob-x))',
        transition:'transform 0.3s ease, box-shadow 0.3s ease',
      },
      '@media (prefers-reduced-motion: reduce)' :{
        transition:'none',
        '&::before':{transition:'none'},
      },
    })}
    />
  )
}