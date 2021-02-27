//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Bryntum.Scheduler
{
    using System;
    using System.Collections.Generic;
    
    public partial class Event
    {
        public Event()
        {
            this.Resizable = true;
            this.Draggable = true;
        }
    
        public override int Id { get; set; }
        public string Name { get; set; }
        public Nullable<System.DateTime> StartDate { get; set; }
        public Nullable<System.DateTime> EndDate { get; set; }
        public int resourceId { get; set; }
        public bool Resizable { get; set; }
        public bool Draggable { get; set; }
        public string Сls { get; set; }
    
        public virtual Resource Resource { get; set; }
    }
}
