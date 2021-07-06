import React from 'react'
import './Sidebar.css'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar, IconButton } from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SidebarChat from './SidebarChat';
function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar__header">
                <Avatar src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUSEhgREhIYGBgZGBgYGBISEhgYGBgYGBgZGRgYGBgcIS4lHB4rIRgYJjgmKy80NTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISGjQsJCs0NDQxNDQ0NDQ0NDE0NDQ0NDQxMTE0NDQ0NDQ0NDQ0MTQ0MTQ0NDQ0MTQ0NDQ0NDE0Mf/AABEIAQgAvwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQIEAwUGBwj/xABAEAACAQIEAwQHBQUHBQAAAAABAgADEQQSITEFBkFRYXGBBxMiMkKRoRRScrHBQ2KCktEjU6Ky4fDxFRYzwtL/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIEAwX/xAAkEQEAAwACAgICAgMAAAAAAAAAAQIRAyExURJBBCITMmGRsf/aAAwDAQACEQMRAD8AuRiKMT1cwjhaMLCFCTCGSFKFY45mFGTFGBWtHlMtrRk1oxophDJCnLooSa0JNXFEUpIUZsBQkhRjVxRWj3SYoy6KUmKcmpiiKEmtCXQkYWNXFQUJMUZZCx5ZNXFcUZMU5ltHKYxinAU5khA5wUpkWjL4oyQpiXWcURRmQUJcFOTCRpiktCZBQlvLGFk0xXWjJClM4EdoXGIU5LIBr9Zgx+OSiuZ9z7qDdv8ATvnNYnG1MQbPol9EHu+fafH6TztyRXy9uPhtfw3NbjCA2pgufvA2T+fr5AyjiOL1PhKr+FLn5te/ymKhhuktfZVM5bfkWnw76/iVrHfbWvxSv/eN/hH5CCcXxA/aHwKIfra82q8OWJuGg7CZ/mt7angp6YMNzK6m1WmGH3qejD+Emx+Ym/wWLSsuem4YbHoVPYynUHxnNYnh9thNfUFSi3rqJs679Qy9VYdRPanN9Wc/J+NHmrvYTXcE4wmLp5l9l1sHQnVT2jtU9DNlOmJ1xTExOSIQhKCOEIBCEJBWtC0I5WRHCMQCOEIUSNaqEVnY2Cgk+AkppeZ61qaUx8bXPeEsbfzFflJacjWqV+VohpMTXatUNRtzoF+6OgEv4ShprMWAw5Jt85u6eHsNJ8++2fV48qrrTHSZqOGllMNYSxSAHSYivt6Tf0xU8LMq0SNpYB75kR56RWHja0tXiKN+gmsxWFFjp8p0NcXmrxFOZtXHpW2+XENXfB4ha6e7s6j4lPvD9R3gT0ejUV1V0N1YBlI6gi4PynA8co6HTab7kXF+swvqzvScp/CfbX8yP4Z0cF9jJcv5fFEZaHRxwhOpwiEcJAQhCBWjijlZOAgI4BCEIUTnuOAviEQfCl/NmP6KJ0P+9JpVU1MTVGxAGjaHKFFiL7i99Z480/rjo4Kz8vl9Qy8PT2ZtESUsIljYHb5zYntnPWOnZMgmCU5rsfxRKRyWLN91Rt4mY8JzLRVglYMhP3hddeuYaRmybkN2aZ7IkHaD4zNh8ZTqC9N1bwN5NztN4x8pU6q9nzE1+JPXsm3axY27LynicNv4dJ52q9KWj7cZxhgwIkeQKtq9en2ojgfhJB/ziLjYsxHzlLkevm4g/YaTj5NT/pHB1Zr8rJ43pEcITvfJEIRyBQjhArRxRyoI4QgEIRwKfF+HV8QiUaNb1IYg1Kq39YF3C0yLW7zfqJdagHDKwIekcq1CbswCqc9+t76+cvrbVj3ADyBmlYYhGrVatRSjhEo00TLkHtXJPUnMPlOW097L6FP6xEMWAXMS022Wy3lfDUsqgSydrTEdNzOtBjcemHJepkQX9+owVb97EanuUHymn4pzRhSxw9c5H0OWrRqJ7wBBuwBXQ7kCdk+GU7oG0tZgCPkZzWL4BT9cK/2WmzKwYMVFyQLDML2bzB6SxmdpkzPWNVgCabh6eqdgNzlOzIwtmHlcd87vBq9RAzTUYHgyIGfLYswf1fwq1xcqBoARfQDqZuzUyqAugA2mY/y3bvw1+O4olAtncLsBc2vbe00WJ53wwYqXPiASPpNZzJw1sXUdqlXIiZRZUZ3d2vlVEUEk6TVYLD8LVCjsrOGKFapqU3zLvubDzAF7jpLHcM2j4yv8Vx9GsuanUBJG3X5ShyBc8R8KVQnwug/NhNbx3C0Kft4a6Ea2uenQ3nSejLC3qV8QR0Smp7zd3H+Sb4qxuwxz2n45L0CEITqcAjhCQEIQgV4QjlQQhAQHCEIF+guYDbz2It/pNdjXc3WoALVGy5Te6WXKT36keUs0MTkvdSR2C1/rNdiMUalQHLlTL7NyMxNzmJA2Fss5rxjt47bC4h1EvZNLylRXaXWbSZhufLHmgad5C2syqdNYhqemJ7DwlauxYGwO2kzK6VHy+sQkfswwuPETM2UD3gNdr7xMa1E443h2KP2utTJ0YLuBa4238ZpOO8BptUZ2wqMxDXamWXMSScxCkAtqdSOydI9FTjSVtfJc2PYd5fqpfUzzi0x4e1qxPcw8qwHCamSoXzWQZRm3t8N/KdVynxmnhaYpMyBnr+5c5zmK08w7gFHylvj9RKVFzoLg9Osp8sco0yFxlQksMg9WbEB2CsW8s6gDpY7zdLTM68OStYjJegGEITrfOEcIQghCECtHCEqARxCMQCOEIA2x8Jr67r65aY+FAPneX32nP4uvkxi3OjAfrPDl9OrgjzLpFlhG7ZWRri8lSqAiYerOT1lepVFip2III7jK+P4ilMXqOFGwvufAdZrW4/hQAWxVLXa1QflI3XZ+lTifKtCqwrqStVfdcMyk22D5SL+IsZx/HOZa+GYKabC1wHY3ViOqmw07jrpPQRUSqtqdUEnsO47r7zVcUwfq0CMoYHoyg3HnMzOeYesRPvJcvyDxCrisY71G9labGwFxckKAT4Enyna4/FZLiUuFslMBaYVR2IoA18Jq+YsaBqT9Z52n5T09Kx8Y/adavimJGJxNHDE+y9RFYfulhm+l56RgkFjYaF3c+PuqP5QD5ieR8uYV8ZjlyMVyguXFrou19fH8vGex4eitNFpr7qgAeU6eOmODn5d2I+/+MkI4T3cghCEAhCECvCEJUAjhHAIQmHGYpKNN61RgqIpZmPQDu6noB1JhWR+g75zXN9EqyVV6aXHbuJh5V5qbiOKqBUCUaaAqG1dmZrBmOw0B9kdu5nTcWwoq0ip7PrOfk7l18MZVruCcRFamLbga+UsgurEd/wCes4nh+JbDVrX0vYztcFi0qW7Z5Pb/ACsYdBmzHcdZDGYGk5zFELEG+ZRZh1DGW/UbWlLG0HIIB3jw1We+pc1iuWVAZsPUZCdbIQUXtst7AeFhObq4fF0GJp1RVANipFi3duQfpOlq8vJe65kN7k03ZCT+9l3mP7GQLOxYDbMbnzPWSbQ6f7RkqfCsW5VjUVka/uOLHbcds5fj+LNSqUGtib21JPYB/vedFxTidPCoWIu/wr2t0mg5MrUX4jT+0va7FluPZatcZFY9BfbvVR1mqV2dcnNfIzXqfLHBUweHSmEUVCimq4AzO+pILbkAkgdgm4jhOt86Z0QhCAQhCAQhCBXhCEqHCEIDnmnpZ4qb08Gp0t62oB1JJVAfCzG3es9LHf8AMzwHmXiX2rF1a/ws5CfgUZF/wgHzMktVjt1voirqHr0ybMwQi/ULnuB/MJ6sy3W08F5XzU6oZTY3BBE9k4RxEuoD723nNe37O2tZmsS4bmxDTrE9Drf85rMBx16bAg3sZ3XOPB/X0i1NfbX2hbdu1fl9QJ5TUQqYrkxiWmYevcH5jSqgOYA21F5sX4onUieHJimpm6sR4GB4/WVr5z4xNZ+lrav29lxPEaZH1HSc5xXHJTpmoz6dE6mef/8ActU++c3cNJQxvEnrNmc7bLfQSfxTM9tzzREdM3Fca1RzUY6/An3R94981isb3BsRqCDqCNrGdDy3wJsQTWqA+rW+p+Nh0HcOvymm4jb1z2AAzsABsADYCetZjfjH057xOfKft9GYKv6yklQG+dEe4651DfrM85z0f4z13DaJuCyKabAG5GRiq37PZCmdHPVzSIQhAIQhAI4o4FaEJouOc14bCXWpUzOP2VP2n/i6L5kSo3pNtT5kzmuK89YOhdVc1mHSiAVHi5IX5XnnPMvN1bGnIf7Ol0oq3vd7t8XhsPrOcd7w3FfbseY+f62KQ0qSeoQ3D5XzM4Pwl7DKO0DfttpOJZ7aSTmwmG0zLUQ6Plupd8p3Go71/wB/mJ6dwl9p4xw/GNRqLUXUr0OxGxBnrHBsSHRKye64B8DsVJ7QQR5Tm5q5OuzhtExjtQtxOC5w5YNQtWw6+3u9P7/ep7e6dzgnzKPyksRRB6zETncNTEeJfO2IZgxBBBGhBFiD3iVy5nsnH+TKWJbP7rffQ7+IM5ap6NK97LUS3a1/rpPavJX7eNuOfpwWczseVeTHxNq1dWWluq7M/wCoXv3PSbMco0+G02xuL/t8hXLQT2ULMwAzM2417JpeMc+4uuSKbCghFglIAEDve2a/hbwmpmbf1SIis/t/p0vOPF6eDpDDUcociwVLWRe23TuHnPMCYO5YlmJJJuSTcknckyIlpWKxjF7zaVzA42pQcVKNVkYbMjFT4G2402Ok73gvpQqrZMXSFQf3lKyv4lT7JPhlnnKxibecxr37hHN2DxVlp1grn9lV9h79gvox/CTN9afMoa+hm94TzVi8IR6qu2UW/s6hzpbsyt7v8NpUmr3yE4PgfpLoVLJi1NFv7xAXpnxA9pfD2h3ztcFj6Ndc1CqlQdtN1a3iAbjzhiYxYhCEDw7i/PuMr3RXFFDploghrdhc6/K05Yv/AMmDaiQEj0iEmaEUiTfQQpO1zBhaTVbSRW8DAZ1PKXHzh29VUN6LHXtRj8Y7trjs16a8yUMaNbX5zNoiYyWq2ms7D6G4UD23HQjsmzrU+onmvoy5oGZcDWbfSi58z6s/+vy7J6lk1nPNc6l0/KLdwo+rJmdKVhrLBQCeTekTnf1hbBYN/wCz1WrWX4zsURvudpHvbbe9a02UtfIQ9JPNdGsgweGbPZw1Sqp9j2QbIp+LU3J20Fr9PNjJhOpgJ71jIxz2tNp2ULaXiEySLLKykI4lgZQhMmaQEcB3jo1XRw6MysDcMjFWB7QRqJGSUQjq+H+kHH0iM1UVVHw1kU3/AI1s1/Oeh8D9IGErqPWOKFS2qVT7Pflqe6R42PdPEWMgdfCEyJTYSLCZGEVpVY4xJMsQEiiSijlQxA0wYLJCBgVijAgkEG4INiCNiD0M925D5q+20RSrG2IpqC4OhqJsKgHyDd57xPDWHSbDh/FalHEU8QmjIQdLjONAwb8Six8SZi1dhutvjL1z0lcwfZcIaKG1SvmRSN1QWztfobEKPxX6TxJROg504z9sxbVFa6KFSn09kC5Nu9ix+U0MUrkHJbZ6RbrEqxqNJICbYAEiZIxQIWgZK0GWQRjtC0cBASULSMoR18IGSbskRIrIsYkUMl2yoTjWK0k41jECFozGYoDEBCEBGBEIgIDiY6RyL9kCSjSOBhARgBGJKBG0cIQIkRwJkTADCBiYwETFeMCMSBA9JkWQaSTaWBJoCPpEJQGK0cRgERkorSCMccQgEF3gusY3MAhCSlBCBkCYDJiJivCQECYEzCdZBkZ+gkgJBB/zJiUEIGEBHaSRp6jzd6NwL1sFYbk0CfZP4GO3gdPCeX1qDU3ZHUqymxRhYg9hEzW0S3aswkIpEGSmmBAwilBeEISBGMDSRYySnQeEBgSI3jBkRAlAtFETARaAiUSRgEIRMYAZGK8FEiprJRqIWlQpFl6iMmK8D6JxDPSYGmCU+JOlj1HYZxHpJ4N62iMUgBKaswHvId/lvOw4Nx7DYkZUxCObXC5gHt3o1m+kdCtSqZ0R0qUmYpdHV1V/iQldr3Gnf3zm7iddnUxMPnwGMGbjmzhBweKalb2T7SfhJOnkbj5TTToidjXLMZOJXheIGErJiOREcCLRpsI5FdoE1iMFgYCvIbxuY0EimBCOKVBItJRWkGNd5kRYNJU4E5FjGxkZoAWJhAmFpAmEtYbH1aaOlOq6K+XOqMVzZb5b28YoSLq4K+Jx9SlQqVGqNfKrPZmUH3iW94gAXNz0npOH5JwyoAaQb95iSx77whOfmtMeHVwRE7qnjeQcM18mdD3OT/mvNDX5Ce59VWBH762+o/pCE8Y5be3vPFSY7hrcRydik2RH/A//ANASm/LmLG+Hbyyn8jCE9Y5rPOfx6Mf/AEPE7eof6f1lijyziW/Z5fxMP0vFCJ5rekj8eq/S5Mrn3nVfAFv6S/T5DJGtUk9gUL07TeOE855r+3pHBT0up6P6X33PfmFr+QlhOQqI1Yue7P8A0EITP8lva/CnplblDCKP/Ex7Tncn89JXPJOFc2plgezOyn6g/lCERyW9rPHT003EeRGS+Sp5VF0/nX9QJosZy9iaQLNSJUbshDAeNtYQnvXks8L8VYaxaZOp0k7dkITqcaDsegkAx7YQkD8/pJAwhA//2Q==' />
                <div className="sidebar__right">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>

                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlinedIcon />
                    <input type="text" placeholder="Search" />
                </div>
            </div>
            <div className="sidebar__chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    )
}

export default Sidebar
